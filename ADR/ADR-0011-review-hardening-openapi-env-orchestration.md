# ADR-0011: Hardening после review — OpenAPI source, env schema и orchestration

## Статус

Принято

## Контекст

По итогам review выявлены риски в foundation-слое:

- OpenAPI контракт определялся в procedural script, что смешивало данные контракта и логику генерации;
- env validation была stringly-typed и плохо масштабировалась;
- `contracts` пакет был слишком тесно связан с внутренним скриптом `api`;
- healthcheck давал только файловый baseline без явного разделения на runtime-проверки.

## Решение

1. Ввести статический источник контракта:
   - `api/openapi/openapi.source.json` как source of truth;
   - `api/scripts/generate-openapi.js` оставить только как copier/normalizer в `openapi.json`.
2. Декомпозировать orchestration генерации:
   - `contracts` build больше не вызывает `api` напрямую;
   - последовательность `openapi -> contracts` оркестрируется в root scripts/workflow.
3. Перевести env validation на схему:
   - парсинг через `dotenv.parse`;
   - единый конфиг портов `configs/ports.json` (base + offsets);
   - добавить unit-тесты для `scripts/validate-env.cjs`.
4. Зафиксировать healthcheck-режимы:
   - baseline (файловые проверки) оставить обязательным;
   - runtime health вынести в явный опциональный режим `--runtime`.

## Последствия

- Плюсы:
  - проще и безопаснее вносить изменения в API контракт;
  - меньше связности между пакетами, лучше масштабируется pipeline;
  - env-проверки предсказуемые и тестируемые;
  - healthcheck явно разделяет bootstrap и runtime слой.
- Минусы:
  - добавился отдельный конфиг портов, его нужно поддерживать в актуальном состоянии;
  - появилась дополнительная дисциплина по обновлению source OpenAPI.
