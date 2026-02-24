# UI

Service scaffold for future React + Vite Mini App implementation.

## Scripts

- `pnpm lint` — run shared ESLint rules
- `pnpm format` — format sources and README
- `pnpm format:check` — verify formatting
- `pnpm test` — baseline Node test runner
- `pnpm build` — baseline build check
- `pnpm quality` — run lint + format check + test + build
- `pnpm dev` — run placeholder entrypoint

## Contracts package

`ui` consumes shared API contracts via dependency:

- `@expense/contracts` (`workspace:*`)
