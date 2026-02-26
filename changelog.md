# Changelog

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
