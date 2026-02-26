# ADR-0009: CI / package publishing hardening по принципу least privilege

## Статус

Принято

## Контекст

Задача `FND-009` требует провести security review CI и публикации пакетов:

- убрать лишние permissions;
- проверить использование секретов;
- снизить риск утечек в логи;
- зафиксировать checklist выполнения.

## Решение

1. `ci.yml` и `reusable-ci.yml` ограничены до `permissions: contents: read`.
2. `contracts-publish.yml` переведен на модель минимальных прав:
   - `permissions: {}` на верхнем уровне;
   - job-level `contents: read`, `packages: write`.
3. Усилены operational safeguards:
   - `concurrency` для publish workflow;
   - `timeout-minutes` для CI/publish jobs;
   - checkout с `persist-credentials: false` и `fetch-depth: 1`.
4. Усилена целостность dependency chain:
   - `pnpm install --frozen-lockfile`;
   - проверка `git diff --exit-code pnpm-lock.yaml`.
5. Добавлен документированный security checklist:
   - `docs/security/ci-packages-hardening-checklist.md`.

## Последствия

- Плюсы:
  - сокращена область действия токенов и прав в CI;
  - уменьшен риск параллельной/конфликтующей публикации пакета;
  - security-review легко проверяется по checklist.
- Минусы:
  - при добавлении новых publish-сценариев потребуется явно расширять permissions.
