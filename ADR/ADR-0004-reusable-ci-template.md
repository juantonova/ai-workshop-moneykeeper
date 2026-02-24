# ADR-0004: Reusable CI template для workspace пакетов

## Статус

Принято

## Контекст

Задача `FND-004` требует единый CI шаблон для всех пакетов с одинаковыми quality gates, matrix Node версии, проверкой lockfile и отчетностью по прогонам.

## Решение

1. Добавлен reusable workflow:
   - `.github/workflows/reusable-ci.yml`
2. Добавлен orchestrator workflow:
   - `.github/workflows/ci.yml`
   - запускает reusable workflow для:
     - `@moneykeeper/api`
     - `@moneykeeper/ui`
     - `@moneykeeper/bot`
     - `@moneykeeper/scheduler`
     - `@expense/contracts`
3. Reusable pipeline включает этапы:
   - `pnpm install --frozen-lockfile`
   - lockfile drift check (`git diff --exit-code pnpm-lock.yaml`)
   - `lint`
   - `test`
   - `build`
4. Для совместимости среды включен matrix:
   - Node `20`
   - Node `22`
5. Для отчётности включен upload artifacts:
   - CI summary report (`ci-report.md`)
   - package artifact path (если задан)

## Последствия

- Плюсы:
  - единый и переиспользуемый CI baseline;
  - ошибки quality gates блокируют PR;
  - снижен риск lockfile-дрейфа между локальной и CI средой.
- Минусы:
  - рост времени CI из-за matrix x пакеты;
  - при изменении общего шага нужно валидировать все вызовы reusable workflow.
