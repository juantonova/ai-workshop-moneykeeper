# Changelog

## 2026-02-26 — API-002

- Реализовано полноценное NestJS приложение в `api` с TypeScript:
  - Создан `tsconfig.json` с поддержкой декораторов и генерации в `dist`.
  - Реализован entry point `src/main.ts` с настройкой CORS и ValidationPipe.
  - Создан `AppModule` как корневой модуль приложения.
- Добавлен `PrismaModule` с глобальным `PrismaService` для dependency injection:
  - `PrismaService` реализован с использованием composition pattern для работы с Prisma Client 7.x.
  - Lifecycle hooks `onModuleInit` и `onModuleDestroy` для управления подключением к БД.
- Реализован `AccountsModule` с полным CRUD функционалом:
  - `GET /api/v1/accounts` — получение всех счетов пользователя.
  - `POST /api/v1/accounts` — создание нового счета (валидация имени, валюты, типа).
  - `PATCH /api/v1/accounts/:id` — изменение имени счета.
  - `POST /api/v1/accounts/:id/archive` — архивирование счета (с проверкой нулевого баланса).
  - `GET /api/v1/accounts/balances` — получение балансов активных счетов.
  - DTOs с class-validator для валидации входных данных.
  - Бизнес-логика расчета баланса на основе транзакций (OPENING_BALANCE, INCOME, EXPENSE, TRANSFER).
- Реализован `CategoriesModule` с CRUD функционалом:
  - `GET /api/v1/categories?type=expense|income` — получение категорий с фильтрацией по типу.
  - `POST /api/v1/categories` — создание новой категории (с проверкой уникальности по normalized name).
  - `PATCH /api/v1/categories/:id` — переименование категории (только для EXPENSE типа).
  - Нормализация имен категорий (trim + lowercase) для обеспечения уникальности.
  - Валидация: income-категории нельзя переименовывать.
- Добавлен `HealthController` для endpoint `/api/v1/health`.
- Реализован глобальный `HttpExceptionFilter` для унифицированной обработки ошибок:
  - Все исключения преобразуются в `ErrorResponseDto` с полями `code`, `message`, `details`.
  - Автоматический маппинг HTTP статус-кодов в бизнес-коды ошибок.
- Обновлен OpenAPI контракт `api/openapi/openapi.source.json`:
  - Добавлены все endpoints для accounts и categories.
  - Определены schemas: `AccountDto`, `CreateAccountDto`, `UpdateAccountDto`, `BalanceDto`, `CategoryDto`, `CreateCategoryDto`, `UpdateCategoryDto`.
- Обновлены зависимости в `api/package.json`:
  - Добавлены `class-validator`, `class-transformer` для валидации.
  - Добавлены dev-зависимости: `@nestjs/testing`, `@types/express`, `tsx` для тестов.
- Настроены build scripts для TypeScript компиляции.
- Добавлен baseline test для проверки сборки.
- Применена миграция Prisma к локальной БД.
- Задача `API-002` готова к отметке выполненной в `BACKLOG.md`.

## 2026-02-26 — API-001

- Добавлен Prisma в `api` и инициализирована конфигурация `api/prisma.config.ts` для SQLite datasource.
- Реализована начальная доменная схема в `api/prisma/schema.prisma`:
  - сущности `User`, `RefreshSession`, `Account`, `Category`, `Transaction`;
  - доменные enum-типы (`AccountCurrency`, `AccountType`, `CategoryType`, `TransactionType`, `TransactionStatus`);
  - связи и индексы для user-bound CRUD, истории транзакций и single active refresh session.
- Создана и применена первая миграция `api/prisma/migrations/20260226104644_init_core_domain/migration.sql`.
- Обновлены скрипты `api/package.json` для управления Prisma (`prisma:generate`, `prisma:migrate:dev`, `prisma:migrate:deploy`) и включена генерация Prisma Client в `build`.
- Обновлен `api/.env.example` с `DATABASE_URL` для локального запуска Prisma.
- Задача `API-001` отмечена выполненной в `BACKLOG.md`.

## 2026-02-26 — FND-011

- Вынесен source of truth OpenAPI в `api/openapi/openapi.source.json`; генератор `api/scripts/generate-openapi.js` упрощен до чтения source и записи артефакта.
- Ослаблена связность `contracts` и `api`: сборка contracts больше не знает, как именно генерируется OpenAPI в API; orchestration перенесена в root scripts/workflow.
- Стандартизированы скрипты генерации (`codegen:*`), при этом сохранены `generate:*` alias для обратной совместимости.
- Env-валидация переведена на schema-based подход с `dotenv.parse`, добавлен единый конфиг портов `configs/ports.json` и тесты `scripts/validate-env.test.cjs`.
- Healthcheck разделен на baseline и runtime-режимы (`pnpm healthcheck:runtime`) для явного перехода к проверкам `/health`.
- В OpenAPI добавлен `ErrorResponseDto` и типизированные error-responses для ключевых endpoint-ов.
- Принято архитектурное решение в ADR:
  - `ADR-0011-review-hardening-openapi-env-orchestration.md`.

## 2026-02-24 — FND-010

- Финально выровнены docs/scripts/CI quality gates после foundation-этапа.
- В reusable CI добавлен шаг `format:check`, чтобы CI соответствовал заявленным quality gates.
- Добавлен root-скрипт `pnpm ci:check` как локальный эквивалент CI baseline (`install --frozen-lockfile + quality`).
- Обновлены `README.md` и `CONVENTIONS.md` для отражения актуального CI-flow и состава workspace-пакетов.

## 2026-02-24 — FND-009

- Выполнен security hardening CI и pipeline публикации пакета контрактов.
- Для `ci` и `reusable-ci` выставлены минимальные права `contents: read` (least privilege).
- Для `contracts-publish` добавлены:
  - верхнеуровневый `permissions: {}`
  - job-level права только `contents: read` и `packages: write`
  - `concurrency` (защита от параллельных публикаций)
  - `timeout-minutes`
  - безопасный checkout (`persist-credentials: false`, `fetch-depth: 1`)
  - lockfile drift check (`git diff --exit-code pnpm-lock.yaml`)
- Добавлен security checklist: `docs/security/ci-packages-hardening-checklist.md`.

## 2026-02-24 — FND-008

- Вынесены shared presets конфигов:
  - `configs/eslint/base.mjs`
  - `configs/prettier/base.cjs`
  - `configs/tsconfig/base.json`
- Root-конфиги переведены на shared presets:
  - `eslint.config.mjs` теперь использует `configs/eslint/base.mjs`
  - `.prettierrc.cjs` теперь использует `configs/prettier/base.cjs`
  - `contracts/tsconfig.json` теперь использует `extends: ../configs/tsconfig/base.json`
- Удалены дублирующиеся `.editorconfig` в `api/ui/bot/scheduler`; оставлен единый root `.editorconfig`.
- Обновлены `README.md` и `CONVENTIONS.md` для отражения shared preset-подхода.

## 2026-02-24 — FND-007

- Проведен аудит зависимостей workspace и сервисов (`api/ui/bot/scheduler/contracts`) на предмет лишних и дублирующих пакетов.
- Удалена неиспользуемая root devDependency `@eslint/js`; ее использование заменено локальной конфигурацией правил в `eslint.config.mjs`.
- Обновлен lockfile после очистки dependency tree.
- Подтверждена стабильность после cleanup: `pnpm quality` проходит полностью.

## 2026-02-24 — FND-006

- Удалены временные bootstrap-заглушки из сервисов (`api/ui/bot/scheduler`) и упрощены их `src/index.js` до минимальных entrypoint-скриптов.
- Перестали хранить в git сгенерированные артефакты (`contracts/dist`, `contracts/src/generated`, `api/openapi/openapi.json`), добавлены соответствующие правила в `.gitignore`.
- Удалены sample/bootstrap файлы, использовавшиеся только для начальной демонстрации naming/scaffold.
- Обновлены README-описания сервисов и root README, чтобы убрать ссылки на placeholder bootstrap-поток.

## 2026-02-24 — FND-005

- Добавлена локальная оркестрация dev-окружения одной командой: `pnpm up:dev`.
- Добавлена валидация `.env` (`scripts/validate-env.cjs`, команда `pnpm validate:env`) с проверкой обязательных переменных и корректности портов.
- Добавлен baseline health-check (`scripts/healthcheck.cjs`, команда `pnpm healthcheck`) для `api/ui/bot/scheduler`.
- Root-скрипт `pnpm dev` теперь запускает оркестрацию с env validation и health-check перед стартом сервисов.
- Обновлен onboarding в `README.md` для сценария запуска локальной среды за <=15 минут.

## 2026-02-24 — FND-004

- Добавлен reusable CI шаблон `.github/workflows/reusable-ci.yml` для всех workspace-пакетов.
- Добавлен общий workflow `.github/workflows/ci.yml`, который запускает quality gates для `api`, `ui`, `bot`, `scheduler`, `contracts`.
- В CI добавлены: matrix по Node (`20`, `22`), проверка lockfile (`--frozen-lockfile` + diff lockfile), upload отчёта и артефактов.
- Обновлена документация по CI в `README.md`.

## 2026-02-24 — FND-003

- Добавлена генерация OpenAPI в `api` (`api/scripts/generate-openapi.js`, `api/openapi/openapi.json`).
- Добавлен пакет `contracts` с именем `@expense/contracts`: генерация TypeScript fetch-клиента из OpenAPI, сборка в `dist`, локальный changelog и semver-политика.
- `ui` и `bot` подключены к `@expense/contracts` через `workspace:*`, без ручных правок импортов после публикации/обновления контракта.
- Добавлен GitHub Actions workflow `.github/workflows/contracts-publish.yml`, который на изменениях API регенерирует OpenAPI/клиент и публикует `@expense/contracts` в GitHub Packages.

## 2026-02-24 — FND-002

- Внедрены единые quality gates (`lint`, `format`, `format:check`, `test`, `build`, `quality`) для `api`, `ui`, `bot`, `scheduler` и для всего workspace.
- Подключены общие инструменты качества: `eslint` и `prettier` с root-конфигами (`eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`).
- Добавлен документ `CONVENTIONS.md` с правилами по форматированию, коммитам, ветвлению и naming conventions.
- Naming conventions применены на примерах в коде: DTO (`api`), UI component (`ui`), handler (`bot`), job (`scheduler`).

## 2026-02-24 — FND-001

- Инициализирован workspace-каркас с сервисами `api`, `ui`, `bot`, `scheduler`.
- Для каждого сервиса добавлены baseline-файлы: `README.md`, `LICENSE`, `.editorconfig`, `.env.example`, `package.json`, `src/index.js`.
- Добавлены единые версии и требования среды: `Node >=20`, `pnpm >=10`, а также корневой `pnpm-workspace.yaml`.
- Добавлены корневые команды `install`, `build`, `test`, `dev` и инструкция локального запуска в `README.md`.
