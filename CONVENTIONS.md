# Engineering Conventions

Единые правила для `api`, `ui`, `bot`, `scheduler`.

## Quality gates

Для каждого сервиса подключены одинаковые команды:

- `pnpm lint`
- `pnpm format`
- `pnpm format:check`
- `pnpm test`
- `pnpm build`
- `pnpm quality`

Для всего workspace:

- `pnpm lint`
- `pnpm format:check`
- `pnpm test`
- `pnpm build`
- `pnpm quality`

## Formatting and linting

- Formatter: `prettier` (root `.prettierrc.json`)
- Linter: `eslint` (root `eslint.config.mjs`)
- Стиль: LF, 2 пробела, финальная новая строка (через `.editorconfig`)

## Commit message convention

Используем Conventional Commits:

- `feat: ...`
- `fix: ...`
- `chore: ...`
- `docs: ...`
- `refactor: ...`
- `test: ...`

Пример:

- `feat(api): add transaction create endpoint contract`

## Branching convention

Формат ветки:

- `feature/<task-id>-<slug>`
- `fix/<task-id>-<slug>`
- `chore/<task-id>-<slug>`

Примеры:

- `feature/FND-003-openapi-contracts-pipeline`
- `chore/FND-002-shared-conventions`

## Naming conventions by service

### API (DTO)

- DTO файлы: `kebab-case` + `.dto.js`
- DTO типы/объекты: `PascalCase`
- Пример: `api/src/dto/create-transaction.dto.js` -> `CreateTransactionDto`

### UI (components)

- Файлы компонентов: `PascalCase.js`
- Компоненты: `PascalCase`
- Пример: `ui/src/components/TransactionForm.js` -> `TransactionForm`

### Bot (handlers)

- Handler файлы: `kebab-case` + `.handler.js`
- Функции handler: `camelCase`
- Пример: `bot/src/handlers/create-expense.handler.js` -> `createExpenseHandler`

### Scheduler (jobs)

- Job файлы: `kebab-case` + `.job.js`
- Job функции: `camelCase`
- Пример: `scheduler/src/jobs/rebuild-monthly-snapshot.job.js` -> `rebuildMonthlySnapshotJob`
