# ADR-0003: OpenAPI -> contracts pipeline для `@expense/contracts`

## Статус

Принято

## Контекст

Задача `FND-003` требует:

- генерацию OpenAPI из `api`;
- генерацию TS-клиента;
- публикацию `@expense/contracts` в GitHub Packages;
- semver-политику и changelog.

## Решение

1. Источник контракта зафиксирован в `api`:
   - `api/scripts/generate-openapi.js`
   - `api/openapi/openapi.json`
2. Добавлен пакет `contracts` (`@expense/contracts`) в workspace:
   - генерация клиента: `openapi-typescript-codegen`
   - сборка: TypeScript -> `dist/*`
   - локальный changelog: `contracts/CHANGELOG.md`
3. Пакеты-потребители `ui` и `bot` подключены к `@expense/contracts` через `workspace:*`.
4. Добавлен workflow публикации:
   - `.github/workflows/contracts-publish.yml`
   - запускается на изменения в `api/**` и `contracts/**`
   - генерирует OpenAPI и клиент
   - публикует пакет в GitHub Packages
5. SemVer policy задокументирована в `contracts/README.md`:
   - MAJOR: breaking contract changes
   - MINOR: backward-compatible additions
   - PATCH: non-breaking fixes

## Последствия

- Плюсы:
  - `api` становится единой точкой правды по контрактам;
  - потребители получают типизированный клиент из одного пакета;
  - публикация контракта автоматизирована.
- Минусы:
  - текущая publish-версия в CI привязана к `github.run_number`; при необходимости потребуется отдельная release-стратегия для строгого контроля версий.
