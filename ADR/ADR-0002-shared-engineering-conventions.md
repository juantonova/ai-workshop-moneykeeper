# ADR-0002: Shared engineering conventions для всех сервисов

## Статус

Принято

## Контекст

Задача `FND-002` требует зафиксировать единые правила:

- линтинга;
- форматирования;
- коммитов;
- ветвления;
- naming conventions для `api/ui/bot/scheduler`.

Также нужно обеспечить одинаковые quality gates в каждом сервисе и применить naming conventions на примерах.

## Решение

1. Введены общие quality gates в каждом сервисе:
   - `lint`
   - `format`
   - `format:check`
   - `test`
   - `build`
   - `quality` (агрегированный)
2. На уровне workspace добавлены команды:
   - `pnpm lint`
   - `pnpm format`
   - `pnpm format:check`
   - `pnpm test`
   - `pnpm build`
   - `pnpm quality`
3. Зафиксированы общие инструменты и их root-конфиги:
   - `eslint` -> `eslint.config.mjs`
   - `prettier` -> `.prettierrc.json`, `.prettierignore`
4. Все conventions документированы в `CONVENTIONS.md`:
   - Conventional Commits;
   - branch naming;
   - naming conventions по сервисам.
5. Добавлены кодовые примеры нейминга:
   - `api/src/dto/create-transaction.dto.js`
   - `ui/src/components/TransactionForm.js`
   - `bot/src/handlers/create-expense.handler.js`
   - `scheduler/src/jobs/rebuild-monthly-snapshot.job.js`

## Последствия

- Плюсы:
  - единый baseline quality gate по всем сервисам;
  - предсказуемый стиль кода и именования;
  - меньше friction в ревью и onboarding.
- Минусы:
  - базовые правила пока минимальные и будут расширяться по мере усложнения сервисов.
