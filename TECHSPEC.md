# TECHSPEC — Expense Dashboard (Telegram Mini App + Bot) V1

## 1. Overview
### Goal
Build a single-user personal expense dashboard with fast Telegram Bot input and a Telegram Mini App for analytics.
Primary V1 promise: in ≤60 seconds, answer:
- Δ Net Worth for the last completed month
- top anomaly of the last completed month
- how total expenses changed for the last completed month (RUB and %)

Traceability:
- [PRD: Vision & Problem Statement]
- [PRD: User Stories/Первый день, Ежемесячный ритуал]

### Terms
- MSK: Europe/Moscow timezone (product timezone)
- “Last completed month”: previous calendar month in MSK
- “Last completed week”: previous week [Mon 00:00 MSK, next Mon 00:00 MSK)
- “Current Net Worth”: on-demand, includes transactions dated “today” in MSK

### Non-goals (high-level)
- Shared access
- Backups
- Bank API integrations
- Budgets by category
- Auto-import
- E2E encryption

Traceability:
- [PRD: Scope/Out-of-scope]

## 2. Scope
### In scope
- Telegram Bot input: Expense / Income / Transfer
- Telegram Mini App as the only analytics UI
- Net Worth in RUB
- Weekly digest notifications
- Weekly net worth snapshots
- Monthly net worth snapshots (strict boundary at 00:00 1st of month MSK)
- FX (CBR): RUB, USD, EUR, KGS
- Investments: investment accounts + monthly snapshots of positions
- Anomalies: last completed month vs prior 3-month average
- CSV export (transactions only)
- Hard delete (no backups)
- Recovery code and re-binding to new Telegram user_id

Traceability:
- [PRD: Scope/In-scope]

### Out of scope
- Any backup/restore capabilities
- Bank API integrations
- Collaborative access
- E2E encryption

Traceability:
- [PRD: Scope/Out-of-scope]

### Assumptions
- Single user and single “account space”; multi-tenant concerns are minimized.
- “Server-side at-rest” encryption requirement is satisfied by OS/VPS disk encryption + file permissions; we do not implement application-level DB encryption in V1.

Traceability:
- [PRD: Target Audience]
- [PRD: NFR/Security]

## 3. Architecture
### Options considered
- Multiple writers to SQLite (api/bot/scheduler) vs one-writer.
- Webhook vs long polling for Telegram Bot.

### Selected architecture
Modular monolith with one-writer by design:
- `api` (NestJS + Prisma + SQLite): the only writer to the DB; owns domain logic.
- `bot` (grammY, long polling): UI/flows only; calls `api` via HTTP.
- `scheduler` (cron trigger): triggers internal job endpoints on `api`.
- `nginx`: TLS termination, serves Mini App static files at `/`, reverse proxy for `/api/v1/*`.

Key decisions (ADRs):
- ADR-A1 (SQLite one-writer): Only `api` mounts the SQLite volume; `bot` and `scheduler` have no filesystem access to DB.
- ADR-A2 (Bot long polling): simplifies infra; no external webhook endpoint for updates.
- ADR-A3 (Internal endpoints isolation): internal HTTP endpoints live under `/internal/*`, and `nginx` never proxies them.

Traceability:
- [PRD: Functional/5.1]
- [PRD: NFR/10]
- [PRD: Security/10]

### Module boundaries (responsibilities)
- Auth module (api): verify Telegram WebApp initData, issue access/refresh, refresh rotation.
- Accounts module (api): create/update name, archive (with constraints), compute balances.
- Categories module (api): create (from bot), rename (Mini App, expense only).
- Transactions module (api): create/update/void; queries for history.
- FX module (api): fetch/store CBR rates, stale policy, “rate on date” helpers.
- Net worth module (api): on-demand current NW, weekly/monthly snapshot generation.
- Investments module (api): monthly snapshot storage and current portfolio valuation.
- Jobs module (api): internal job endpoints triggered by `scheduler`.

### Critical flows
- Bot multi-step transaction input (draft in-memory) → create transaction via API.
- Mini App loads dashboards/analytics via `/api/v1/*`.
- Scheduled snapshots/digest via `/internal/jobs/*`.

### Transactionality, idempotency, concurrency
- DB writer is only `api`. All write operations are executed as DB transactions in `api` where needed.
- We do NOT implement idempotency keys for transaction creation in V1.
- We provide a “VOID” status to cancel mistaken/duplicate transactions without deletion.

Traceability:
- [PRD: Bot Input speed]
- [PRD: Mini App/History + Edit Last]

### Diagram (high-level)
```mermaid
flowchart LR
  TG[Telegram] -->|long polling updates| BOT[bot]
  TG -->|WebApp| UI[mini app]

  UI -->|HTTPS /api/v1/*| NGINX[nginx]
  NGINX -->|reverse proxy| API[api]
  NGINX -->|static /| UISTATIC[UI static files]

  BOT -->|HTTP (docker network)| API
  CRON[scheduler (cron)] -->|HTTP /internal/jobs/*| API

  API -->|SQLite volume| DB[(sqlite)]
```

## 4. Data Model
### Conventions
- IDs: auto-increment integers (`INTEGER PRIMARY KEY` in SQLite), exposed via public API.
- Time storage: store timestamps in UTC (`*_at_utc`), interpret months/weeks/days in MSK.
- Money: Decimal with scale=2 for all currencies; rounding HALF_EVEN.
- Amount sign: amounts stored as positive decimals; sign is implied by transaction `type`.

Traceability:
- [PRD: FX/5.7]
- [PRD: Snapshots & Time/8]

### Entities (conceptual)
User
- `id`
- `telegram_user_id`
- `onboarding_started_at_utc`
- `onboarding_completed` (true once opening balance recorded)
- `recovery_code_hash`

Session (single active session)
- `user_id`
- `refresh_token_hash`
- `expires_at_utc`
- `rotated_at_utc`

Account
- `id`, `user_id`
- `name`
- `currency` ∈ {RUB, USD, EUR, KGS}
- `type` ∈ {CASH, INVESTMENT} (default: CASH)
- `archived` boolean
- Immutable after create: `currency`, `type` (only `name` can be changed)

Category
- `id`, `user_id`
- `type` ∈ {EXPENSE, INCOME}
- `name`
- Uniqueness: (user_id, type, normalized_name) where normalized_name = trim + lowercase
- Rename allowed for EXPENSE only (income categories immutable after creation)

Transaction (single table)
- `id`, `user_id`
- `type` ∈ {EXPENSE, INCOME, TRANSFER, OPENING_BALANCE}
- `status` ∈ {ACTIVE, VOID}
- `occurred_at_utc`
- `created_at_utc`, `updated_at_utc`
- For EXPENSE/INCOME:
  - `account_id` (must be RUB account)
  - `category_id` (required)
  - `amount` (Decimal, positive)
- For TRANSFER:
  - `from_account_id`, `to_account_id`
  - `amount_from` (Decimal, positive)
  - `amount_to` (Decimal, positive)
  - invariant: if currencies equal then amount_to == amount_from
- For OPENING_BALANCE:
  - `account_id` (RUB, default account)
  - `amount` (Decimal, positive)
  - immutable + cannot be VOID

FXRate
- `rate_date_msk` (YYYY-MM-DD)
- `currency` ∈ {USD, EUR, KGS}
- `rate_to_rub` (Decimal)
- `fetched_at_utc`
- `source` = CBR

InvestmentsSnapshot
- `user_id`, `account_id (type=INVESTMENT)`
- `month_msk` (YYYY-MM)
- `snapshot_at_utc` (“now” when user submits)
- uniqueness: (account_id, month_msk) (last-write-wins overwrites)

InvestmentsPosition
- `snapshot_id`
- `ticker` (normalized trim+uppercase)
- `market_value` (Decimal, in account currency)
- uniqueness: (snapshot_id, normalized_ticker) (overwrite)

NetWorthSnapshot (weekly/monthly)
- `user_id`
- `kind` ∈ {WEEKLY, MONTHLY}
- `as_of_msk` (timestamp at boundary: weekly Mon 00:00, monthly 1st 00:00)
- `created_at_utc`
- `created_late` boolean (for backfill)
- `net_worth_rub` (Decimal)
- Breakdown JSON (or separate table) containing:
  - balances per active account (native currency)
  - investments total (native and RUB)
  - applied FX rates (currency→RUB) and their rate_date_msk
  - fx_stale_warning (boolean + age_days)

Traceability:
- [PRD: Net Worth/5.5]
- [PRD: Investments/5.6]
- [PRD: FX/5.7]

### Invariants & validation rules (selected)
- Expense/Income can only use RUB accounts (API hard validation).
- Investment accounts do not accept transactions of types EXPENSE/INCOME/TRANSFER.
- Transfer cannot change from/to accounts on edit; only amounts and date.
- Archive account only if computed balance == 0.00; archived accounts excluded from Net Worth.

### Migrations
- Prisma migrations (checked into `api` repo).

### Audit/history
- No audit trail for transaction edits; edits overwrite in place.

## 5. Interfaces
### External API (public) — `/api/v1/*`
Auth
- `POST /api/v1/auth/exchange-init-data`
  - input: Telegram WebApp `initData` string
  - output: access JWT (30 min) + sets refresh cookie (30 days, rotating)
- `POST /api/v1/auth/refresh`
  - uses refresh cookie
  - output: new access JWT + rotates refresh cookie
- `GET /api/v1/auth/me`
  - output: `telegram_user_id`, `onboarding_completed`

Accounts
- `GET /api/v1/accounts`
- `POST /api/v1/accounts` (create; set currency + type + name)
- `PATCH /api/v1/accounts/:id` (rename only)
- `POST /api/v1/accounts/:id/archive` (requires balance==0)
- `GET /api/v1/accounts/balances` (active accounts only; includes investment accounts with carry-forward value)

Categories
- `GET /api/v1/categories?type=expense|income`
- `PATCH /api/v1/categories/:id` (rename; expense only)

Transactions
- `GET /api/v1/transactions`
  - pagination: `offset`, `limit` (default 50, max 200)
  - filters:
    - `type=expense|income|transfer|opening|all`
    - `date_from=YYYY-MM-DD` and `date_to=YYYY-MM-DD` (MSK, inclusive)
    - `category_id=<int>`
- `POST /api/v1/transactions` (create)
- `PATCH /api/v1/transactions/:id` (edit)
- `POST /api/v1/transactions/:id/void` (allowed: expense/income/transfer)

Analytics
- `GET /api/v1/analytics/expenses-breakdown?month=YYYY-MM`
  - returns top 5 + “Other” item (category_id null)
- `GET /api/v1/analytics/monthly-expenses?month=YYYY-MM`
  - returns:
    - `total_expenses_rub` for `month`
    - `total_expenses_prev_month_rub`
    - `delta_rub` and `delta_pct`
  - expenses include only `type=EXPENSE` and `status!=VOID`
- `GET /api/v1/analytics/anomalies?month=YYYY-MM`
  - returns list sorted by ratio desc; each item includes category + actual_rub + ratio
  - excludes norm=0 and requires 3 full months of history
- `GET /api/v1/analytics/anomaly-settings`
- `PATCH /api/v1/analytics/anomaly-settings`
  - global X default 1.20
  - per-category overrides

Net worth
- `GET /api/v1/net-worth/current`
  - returns net_worth_rub + breakdown + applied FX + fx warnings
- `GET /api/v1/net-worth/monthly-delta?month=YYYY-MM`
  - strict month boundary in MSK using monthly snapshots:
    - `net_worth_start_rub` (as-of 1st of month 00:00 MSK)
    - `net_worth_end_rub` (as-of 1st of next month 00:00 MSK)
    - `delta_rub`
  - if required monthly snapshots do not exist (e.g., onboarding incomplete / skipped), returns a clear error (e.g., 409 with `reason=ONBOARDING_INCOMPLETE`)

Export
- `GET /api/v1/export/transactions.csv`
  - returns CSV file containing all transaction types + status

Traceability:
- [PRD: Mini App/6]
- [PRD: Export/9]

### Internal endpoints — `/internal/*` (NOT proxied by nginx)
Jobs (trigger-only; business logic lives in api)
- `POST /internal/jobs/weekly-snapshot?as_of=YYYY-MM-DD` (Mon boundary)
- `POST /internal/jobs/weekly-digest?as_of=YYYY-MM-DD`
- `POST /internal/jobs/monthly-snapshot?as_of=YYYY-MM-01`
- `POST /internal/jobs/monthly-export-reminder?as_of=YYYY-MM-01`

Notes:
- No internal auth in V1; relies on Docker network isolation.

### Telegram Bot interface
- Long polling
- Persistent reply keyboard: “Расход”, “Доход”, “Перевод”, “Открыть Mini App”
- Multi-step flows with in-memory drafts TTL 30 min
- Category search: user enters 1–3 letters; bot returns inline matches (5–10) + “Новая категория”
- Date selection: Today / Yesterday / Other date (supports DD.MM and DD.MM.YYYY); stored as 00:00 MSK
- Transfer amount input: one amount if same-currency accounts else two amounts
- Commands:
  - `/start` onboarding and opening balance prompt
  - `/recovery` show/reissue recovery code
  - `/recover` rebind flow (new Telegram user_id)
  - `/delete` hard delete (OTP confirmation)

## 6. Workflows (E2E)
1) First run onboarding
- User finds bot → `/start`
- Bot creates default account “Основная карта (RUB)” via API
- Bot asks opening balance (optional to proceed)
- If user provides opening balance later, API records `OPENING_BALANCE` dated 00:00 MSK of the `/start` day

Traceability:
- [PRD: User Stories/4.1]

2) Add expense (bot)
- Tap “Расход” → enter amount → search/select category (or create new category + choose type) → select account (RUB only) → optional date selection → confirm
- API creates `EXPENSE` transaction
- Bot sends confirmation with “Edit Last”

3) Add income (bot)
- Same flow as expense; uses income categories list

4) Add transfer (bot)
- Tap “Перевод” → pick from/to accounts
- If same currency: enter one amount
- If different currency: enter amount_from then amount_to
- Optional date selection → confirm
- API creates `TRANSFER`

5) Edit Last
- Applies to last created transaction by `created_at`: expense/income/transfer
- For transfer: only amounts and date; from/to immutable

6) Mini App Home
- UI authenticates (exchange initData), refreshes silently on 401
- Loads:
  - `/accounts/balances` (active only)
  - `/analytics/expenses-breakdown` for last completed month
  - `/net-worth/current`
- Buttons “Add expense/income” just open bot (no auto-start)

7) Anomalies view
- Calls `/analytics/anomalies?month=YYYY-MM` (last completed month)
- Shows top highlighted + full list

8) Transaction history
- Calls `/transactions` with filters and offset/limit
- Default types: expense/income/transfer; includes VOID
- Edit expense/income: amount/category/account/status only (no date change)

9) Weekly digest
- Triggered at Mon 00:00 MSK
- Ensure weekly snapshot exists (create then digest)
- Digest content:
  - Net worth snapshot
  - total expenses for last completed week
  - button to open Mini App

Traceability:
- [PRD: Notifications/7]

10) Monthly net worth snapshot (strict boundary)
- Triggered at 1st day of month 00:00 MSK
- If `onboarding_completed=false` (opening balance not entered): skip creating monthly snapshots (monthly analytics is gated)
- If missed due to downtime: do backfill on next run and mark `created_late=true`
- FX selection for `as_of=YYYY-MM-01 00:00 MSK`:
  - use CBR rate for `rate_date_msk=YYYY-MM-01` if present
  - otherwise use the last available `rate_date_msk` strictly before the as-of date (prev business day rule)
- Used for “Δ Net Worth for last completed month”:
  - Let M be last completed month.
  - ΔNW(M) = monthly_snapshot(as_of=1st of (M+1) 00:00 MSK).net_worth_rub − monthly_snapshot(as_of=1st of M 00:00 MSK).net_worth_rub

Traceability:
- [PRD: Monthly ritual/4.2]
- [PRD: Snapshots & Time/8]
- [PRD: FX/5.7]

11) Monthly export reminder
- Triggered at 1st 10:00 MSK
- Bot message reminding to export CSV; includes link/button to open Mini App

Traceability:
- [PRD: Security & Data/Export reminder]

12) Hard delete
- User runs `/delete`
- Bot generates 6-digit code (TTL 5 min, 3 attempts)
- On success, API deletes financial data and resets user identity (telegram_user_id binding + recovery + sessions)
- FX cache/rates may remain

Traceability:
- [PRD: Security & Data/Hard delete]

## 7. Integrations
### Telegram
- Bot API (long polling)
- WebApp initData verification in `api`

### FX
- CBR rates (RUB base)
- On-demand fetch when needed
- Store in SQLite

Fallback/degradation
- If rates stale/unavailable:
  - show stale warning up to 7 days
  - fail-closed if >7 days (do not provide RUB net worth/aggregates)

Traceability:
- [PRD: FX/5.7]

## 8. NFR
### Performance
- Bot step response P95 ≤ 1s
- Mini App first load P95 ≤ 2s

Traceability:
- [PRD: NFR/Performance]

### Reliability
- Single VPS, no HA
- No backups (explicit product decision)
- Snapshots/jobs are at-least-once; rare duplicates are acceptable

Traceability:
- [PRD: Risks R1]

### Security
- TLS via nginx + Let’s Encrypt/certbot
- At-rest: file permissions + OS/VPS disk encryption assumption
- Auth:
  - Telegram user_id identity
  - WebApp initData verification
  - Access JWT 30 min
  - Refresh cookie 30 days, rotating, stored hashed in DB
  - refresh endpoint POST, no CSRF token (SameSite=Lax)
- Internal endpoints are not exposed publicly; nginx does not proxy `/internal/*`

Traceability:
- [PRD: Security & Data]
- [PRD: NFR/Security]

### Privacy
- Single user; no sharing
- Hard delete available

### Observability
- Structured logs in `api`, `bot`, `scheduler`
- Log security events (refresh reuse, recovery, delete)
- Minimal health endpoint for api (`/api/v1/health`) is recommended (ASSUMPTION)

### Maintainability
- OpenAPI-first + generated TS client (`openapi-generator typescript-fetch`) published to GitHub Packages
- Separate repositories; SemVer for `@expense/contracts`

## 9. Operations
### Environments
- dev, prod (no staging)

### Deployment
- One VPS
- Docker Compose services: `nginx`, `api`, `bot`, `scheduler`, `ui-build` (build-time only)
- `api` port is NOT published to host; only reachable via docker network
- Public exposure: nginx only (80/443)

### TLS
- Let’s Encrypt + certbot with auto-renew

### Config & secrets
- `.env` on server (not in git) + `env_file:` in compose

### CI/CD
- GitHub Actions
  - build/test/lint
  - generate & publish `@expense/contracts`
  - build docker images
  - deploy to VPS over SSH

### Release strategy
- No stage → prefer small, reversible changes
- DB migrations executed as part of deploy (Prisma migrate)

## 10. Testing & Acceptance
### Testing strategy
- `api`: unit tests for domain services (net worth calc, FX selection, anomalies), integration tests for critical endpoints
- `bot`: unit tests for flow state machine and parsing
- `ui`: basic component tests + smoke e2e (optional)
- Contract tests: generated client compilation against OpenAPI

### Acceptance criteria (system-level)
- Onboarding creates default RUB account and allows entering opening balance in bot
- Bot creates expense/income quickly and validates required fields
- Transfer supports single-amount same currency and dual-amount cross-currency
- Mini App Home shows balances (native currency), expenses breakdown (last completed month), current Net Worth (RUB)
- History includes filters (category/period/type), supports editing, includes VOID
- Anomalies show last completed month, require 3 full prior months, top anomaly chosen by ratio
- Weekly snapshot and weekly digest run at Mon 00:00 MSK
- Monthly export reminder at 1st 10:00 MSK
- CSV export produces transactions-only file
- Hard delete uses OTP (6 digits, 5 min TTL, 3 attempts) and resets user identity

Traceability:
- [PRD: Acceptance Criteria]

## 11. Risks & Open Questions
### Key risks
- R1 Data loss (no backups)
  - Mitigation: export reminder + UX warnings
- R2 Double-input duplicates (no idempotency)
  - Mitigation: allow VOID; Edit Last
- R3 FX + snapshots trust
  - Mitigation: store applied FX in snapshots; show FX stale warnings; fail-closed after 7 days
- R4 Anomaly noise with little data
  - Mitigation: require 3 full months; exclude norm=0
- R5 Historical consistency
  - ADR: for transaction edits we do not recalc full history.
  - Weekly snapshots: recompute only the next weekly snapshot boundary where `snapshot_as_of_msk >= transaction.occurred_at_msk` (ceiling to next Monday 00:00 MSK).
    - Example: txn at 2026-02-18 00:00 MSK → recompute weekly snapshot as-of 2026-02-23 00:00 MSK.
  - Monthly snapshots: recompute only the next monthly snapshot boundary where `snapshot_as_of_msk >= transaction.occurred_at_msk` (ceiling to next 1st 00:00 MSK).
    - Example: txn at 2026-02-18 00:00 MSK → recompute monthly snapshot as-of 2026-03-01 00:00 MSK.
  - Monthly snapshots are strict but may be skipped until onboarding complete.

Traceability:
- [PRD: Risks & Mitigations]

### Open questions
- None for V1.

ADR (Interfaces freeze): Public endpoint paths in section 5 (Interfaces) are frozen for V1. Any path/operation breaking change requires a MAJOR version bump for the API and `@expense/contracts` (SemVer).

## 12. Backlog Seeds (Epics)
1) Repo setup & foundations
- Goal: bootstrap separate repos, shared conventions, contracts pipeline
- Output: `api`, `ui`, `bot`, `scheduler` repos; OpenAPI generation; `@expense/contracts` published to GitHub Packages
- Risks: CI auth to GH Packages

2) API core (NestJS + Prisma + SQLite)
- Goal: implement schema, migrations, core domain services
- Output: accounts/categories/transactions CRUD + auth endpoints
- Dependencies: foundation

3) Telegram auth + sessions
- Goal: exchange initData, access+refresh rotation, single session policy
- Output: `/api/v1/auth/*`, cookie policy, hashing refresh

4) Bot flows (grammY)
- Goal: implement persistent keyboard + multi-step drafts + validation
- Output: expense/income/transfer creation; category search/create; date selection; Edit Last

5) Mini App UI (React + Vite)
- Goal: Home, Anomalies, History, Accounts, Category rename, Export
- Output: TS client usage; deep link to bot

6) FX + Net Worth engine
- Goal: CBR on-demand fetch + store rates; compute current net worth with breakdown
- Output: `/net-worth/current`, FX stale policy

7) Snapshots & jobs
- Goal: weekly snapshot + weekly digest; monthly snapshot strict; reminders
- Output: `/internal/jobs/*` + cron scheduler container

8) Operations & deployment
- Goal: Docker Compose + nginx + TLS + deploy pipeline
- Output: prod-ready VPS playbook, `.env` secrets, certbot renewal

9) Export & hard delete + recovery
- Goal: CSV export, export reminder, delete OTP flow, recovery/rebind
- Output: end-to-end UX and API flows
