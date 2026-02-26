# CI / Packages hardening checklist

Статус: закрыт (FND-009)

## Secrets and auth

- [x] В workflows не используются hardcoded secrets.
- [x] Для публикации пакета используется только `GITHUB_TOKEN`.
- [x] Права на публикацию ограничены job-level permission `packages: write`.

## Least privilege

- [x] Общий `ci` workflow ограничен `permissions: contents: read`.
- [x] Reusable CI workflow ограничен `permissions: contents: read`.
- [x] Workflow публикации `contracts-publish` использует `permissions: {}` на верхнем уровне.
- [x] Повышенные права (`packages: write`) выдаются только конкретной publish-job.

## Supply-chain / integrity

- [x] Установка зависимостей в CI выполняется с `--frozen-lockfile`.
- [x] Добавлена явная проверка неизменности lockfile (`git diff --exit-code pnpm-lock.yaml`).
- [x] Checkout выполняется с `persist-credentials: false` и `fetch-depth: 1`.

## Operational safety

- [x] Для publish workflow включен `concurrency` (защита от параллельных публикаций).
- [x] Для CI и publish jobs добавлены `timeout-minutes`.
- [x] Снижен уровень npm-логирования при публикации (`NPM_CONFIG_LOGLEVEL=error`), чтобы минимизировать риск утечек в логи.
