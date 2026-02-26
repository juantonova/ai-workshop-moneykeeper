# ADR-0010: Foundation alignment для CI, scripts и документации

## Статус

Принято

## Контекст

Задача `FND-010` требует устранить оставшиеся рассинхронизации между:

- README;
- CI workflows;
- фактическими quality gates в скриптах.

До выравнивания CI шаги не включали `format:check`, хотя quality gate и документация подразумевали его наличие.

## Решение

1. В `reusable-ci.yml` добавлен явный шаг `format:check`.
2. В root `package.json` добавлен `pnpm ci:check`:
   - `pnpm install --frozen-lockfile`
   - `pnpm quality`
3. Документация синхронизирована с фактическим pipeline:
   - обновлен `README.md` (CI stages + локальный CI-equivalent script)
   - обновлен `CONVENTIONS.md` (включен `contracts`, добавлен `ci:check`)

## Последствия

- Плюсы:
  - CI и локальные quality gates соответствуют документации;
  - проще воспроизводить CI-проверку локально;
  - foundation-этап завершен без рассинхрона между docs/scripts/workflows.
- Минусы:
  - CI станет чуть дольше из-за дополнительного этапа `format:check`.
