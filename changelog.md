# Changelog

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
