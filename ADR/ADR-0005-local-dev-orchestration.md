# ADR-0005: Local developer orchestration через root scripts

## Статус

Принято

## Контекст

Задача `FND-005` требует один удобный сценарий локального запуска всех сервисов с обязательной валидацией окружения и health-check, плюс понятный onboarding.

## Решение

1. Добавлены root-команды:
   - `pnpm validate:env`
   - `pnpm healthcheck`
   - `pnpm up:dev`
2. Добавлена валидация окружения:
   - `scripts/validate-env.cjs`
   - проверяет наличие `.env`, обязательные ключи и валидность/уникальность портов
3. Добавлен baseline health-check:
   - `scripts/healthcheck.cjs`
   - проверяет наличие `package.json`, `src/index.js` и `dev` script у `api/ui/bot/scheduler`
4. Root-команда `pnpm dev` теперь запускает оркестрацию:
   - `validate:env` -> `healthcheck` -> `pnpm -r --parallel dev`
5. Onboarding обновлен в `README.md` с последовательностью запуска за <=15 минут.

## Последствия

- Плюсы:
  - локальный запуск предсказуем и стандартизирован;
  - ошибки конфигурации `.env` выявляются до старта сервисов;
  - повышена скорость onboarding нового разработчика.
- Минусы:
  - текущий health-check инфраструктурный (baseline), не runtime HTTP health;
  - при усложнении сервисов проверку нужно расширить до реальных endpoint health probes.
