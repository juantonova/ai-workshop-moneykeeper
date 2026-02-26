# ADR-0008: Shared config presets вместо дублирования по сервисам

## Статус

Принято

## Контекст

Задача `FND-008` требует устранить дубли конфигов и перевести проект на shared presets для `eslint/tsconfig/prettier`.

До cleanup в репозитории было дублирование:

- отдельные одинаковые `.editorconfig` в `api/ui/bot/scheduler`;
- локальные root-конфиги без явного выделения shared preset-слоя.

## Решение

1. Создана директория shared presets:
   - `configs/eslint/base.mjs`
   - `configs/prettier/base.cjs`
   - `configs/tsconfig/base.json`
2. Root-конфиги подключены к shared presets:
   - `eslint.config.mjs` -> `configs/eslint/base.mjs`
   - `.prettierrc.cjs` -> `configs/prettier/base.cjs`
   - `contracts/tsconfig.json` -> `extends ../configs/tsconfig/base.json`
3. Удалены дублирующиеся `.editorconfig` в сервисах:
   - `api/.editorconfig`
   - `ui/.editorconfig`
   - `bot/.editorconfig`
   - `scheduler/.editorconfig`
4. Оставлен единый root `.editorconfig`.

## Последствия

- Плюсы:
  - единая точка управления конфигами;
  - меньше копипаста и риска рассинхронизации;
  - изменения shared preset автоматически применяются в пакетах.
- Минусы:
  - при редактировании пресета нужно внимательнее проверять влияние на все пакеты.
