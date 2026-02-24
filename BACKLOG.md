# BACKLOG (V1)

Источник этапов: `TECHSPEC.md` -> `Backlog Seeds (Epics)`  
Ограничения и критерии: `PRD.MD` (Scope V1, Acceptance Criteria, Data & Security)

## Stage 1. Repo Setup & Foundations

- [x] [FND-001] Initialize multi-repo workspace structure
Task Context: Создай каркасы репозиториев `api`, `ui`, `bot`, `scheduler` с единым baseline: README, лицензия, `.editorconfig`, базовые npm scripts, единые версии Node/PNPM, и шаблон `.env.example`.
Task DOD: Все 4 репозитория собираются пустым baseline-командой (`install`, `build`, `test`), структура единообразна, есть инструкция запуска локальной среды.

- [x] [FND-002] Establish shared engineering conventions
Task Context: Зафиксируй единые правила линтинга/форматирования/коммитов/ветвления и naming conventions для API DTO, UI компонентов, bot handlers, scheduler jobs.
Task DOD: В каждом репозитории подключены и проходят одинаковые quality gates; conventions описаны в документации и применены на примерах.

- [ ] [FND-003] Set up contracts pipeline from OpenAPI
Task Context: Настрой генерацию OpenAPI из `api`, генерацию TS-клиента и публикацию `@expense/contracts` в GitHub Packages; добавь semver-политику и changelog.
Task DOD: Pipeline автоматически публикует версию контракта при изменении API, `ui` и `bot` могут импортировать пакет без ручных правок.

- [ ] [FND-004] Configure CI templates for all repos
Task Context: Сделай reusable CI workflow: install, lint, test, build, artifact/report; добавь матрицу для Node версии и проверку lockfile.
Task DOD: CI проходит во всех репозиториях, ошибки падают на PR, есть кэш зависимостей и отчетность по этапам.

- [ ] [FND-005] Add local developer orchestration
Task Context: Добавь удобный локальный сценарий запуска всех сервисов (через root workspace scripts или task runner), включая env validation и health-checkы.
Task DOD: Одна команда поднимает dev-окружение, документация описывает onboarding нового разработчика за <=15 минут.

- [ ] [FND-006] Stage cleanup: remove temporary bootstrap artifacts
Task Context: Удали временные файлы и заглушки, оставшиеся после инициализации (sample configs, лишние шаблоны, неиспользуемые скрипты).
Task DOD: В репозиториях нет bootstrap-мусора, все оставшиеся файлы реально используются.

- [ ] [FND-007] Stage cleanup: remove unnecessary dependencies
Task Context: Проведи аудит зависимостей во всех репозиториях и удаляй неиспользуемые/дублирующие пакеты и transitive overrides без необходимости.
Task DOD: Dependency tree минимизирован, lockfiles обновлены, сборка и тесты зеленые.

- [ ] [FND-008] Stage cleanup: eliminate duplicated configs
Task Context: Вынеси повторяющиеся конфиги в shared presets (eslint/tsconfig/prettier) и сократи дубли между репозиториями.
Task DOD: Дублирование конфигов устранено, изменения shared preset корректно применяются в каждом репозитории.

- [ ] [FND-009] Stage security review: CI and package publishing hardening
Task Context: Проверь секреты CI, права токенов GH Packages, принцип least privilege и отсутствие чувствительных данных в логах.
Task DOD: Security checklist закрыт, лишние permissions убраны, публикация контрактов работает с минимально необходимыми правами.

- [ ] [FND-010] Stage codebase hygiene: final formatting and docs alignment
Task Context: Приведи документацию, скрипты и quality gates к единому состоянию после foundation-этапа.
Task DOD: Нет рассинхронизации между README/CI/scripts, линтер и форматтер проходят без исключений.

## Stage 2. API Core (NestJS + Prisma + SQLite)

- [ ] [API-001] Implement initial Prisma schema for core domain
Task Context: Спроектируй и реализуй модели `User`, `Account`, `Category`, `Transaction`, `RefreshSession`, связи и индексы с учетом single-user product model из PRD.
Task DOD: Prisma schema и первая миграция применяются локально, структура покрывает CRUD и дальнейшие auth/snapshot расширения.

- [ ] [API-002] Build accounts and categories CRUD endpoints
Task Context: Реализуй `api/v1` endpoints для счетов и категорий (включая базовые категории и custom), валидацию DTO и error mapping.
Task DOD: Контракты и e2e тесты подтверждают CRUD, есть автосоздание `Основная карта (RUB)` и обязательный opening balance в onboarding-потоке.

- [ ] [API-003] Build transactions CRUD with type rules
Task Context: Реализуй `Expense/Income/Transfer` с правилами PRD: transfer не влияет на income/expense аналитику, поддержка даты/времени и account/category ссылок.
Task DOD: CRUD и валидации работают корректно, есть тесты бизнес-правил по типам транзакций и корректным статус-кодам ошибок.

- [ ] [API-004] Implement history query/filter API
Task Context: Добавь list/search endpoint истории с фильтрами `category/period/type` и пагинацией, чтобы поддержать Mini App history.
Task DOD: История возвращает корректный набор данных по фильтрам, перформанс приемлем на realistic dataset, контракт документирован.

- [ ] [API-005] Generate and publish OpenAPI for core endpoints
Task Context: Подключи документацию и генерацию OpenAPI для новых core endpoints, синхронизируй с `@expense/contracts`.
Task DOD: OpenAPI содержит все core операции, `contracts` обновлен и потребляется `ui`/`bot` без ручных патчей.

- [ ] [API-006] Stage cleanup: remove temporary API scaffolding
Task Context: Удали временные контроллеры/DTO/mock handlers, использованные для старта.
Task DOD: В API остался только production-код core-домена, без неиспользуемых заглушек.

- [ ] [API-007] Stage cleanup: remove unused API libraries
Task Context: Проверь и очисти зависимости NestJS/Prisma/validation слоя от лишних пакетов.
Task DOD: Нет неиспользуемых зависимостей, сборка и тесты стабильны.

- [ ] [API-008] Stage cleanup: deduplicate domain and DTO logic
Task Context: Устрани повторяющуюся валидацию/маппинг в сервисах transactions/accounts/categories через shared utilities.
Task DOD: Повторяющийся код заменен reusable abstractions без потери читаемости.

- [ ] [API-009] Stage security review: validate input and data isolation
Task Context: Проверь защиту от некорректного ввода, injection в фильтрах, и корректную изоляцию данных пользователя.
Task DOD: Security tests/checklist пройдены, validation покрывает критичные поля и негативные сценарии.

- [ ] [API-010] Stage codebase hygiene: align migrations, docs, and tests
Task Context: Синхронизируй миграции, API docs и тестовые фикстуры после реализации core.
Task DOD: Документация отражает фактический API, миграции воспроизводимы, тесты зеленые.

## Stage 3. Telegram Auth + Sessions

- [ ] [AUTH-001] Implement Telegram initData verification endpoint
Task Context: Реализуй вход через Telegram WebApp initData с проверкой подписи, TTL и отказом при невалидных данных.
Task DOD: Endpoint принимает только валидный initData, негативные кейсы покрыты тестами.

- [ ] [AUTH-002] Implement access and refresh token issuance
Task Context: Добавь выдачу access+refresh токенов, ротацию refresh, хеширование refresh в БД и контроль срока жизни.
Task DOD: Login и refresh flow работают end-to-end, refresh хранится только в hash-виде, ротация подтверждена тестами.

- [ ] [AUTH-003] Enforce single active session policy
Task Context: Реализуй policy единственной активной сессии на пользователя с отзывом предыдущих refresh-сессий при новом входе.
Task DOD: При повторном логине старый refresh недействителен, поведение покрыто интеграционными тестами.

- [ ] [AUTH-004] Configure secure cookie and auth middleware
Task Context: Настрой cookie policy (`HttpOnly`, `Secure`, `SameSite`) и guard/middleware для защиты `api/v1` маршрутов.
Task DOD: Защищенные endpoints недоступны без валидной auth-сессии, cookie-параметры соответствуют security ожиданиям.

- [ ] [AUTH-005] Add auth contract and client integration hooks
Task Context: Обнови OpenAPI и `@expense/contracts` для `/api/v1/auth/*`, подготовь client hooks для `ui` и `bot`.
Task DOD: Контракты публикуются, клиенты используют типизированные auth-вызовы без ручного HTTP-кода.

- [ ] [AUTH-006] Stage cleanup: remove legacy auth stubs
Task Context: Удали временные auth middleware/stubs/fixtures, оставшиеся после внедрения реального auth.
Task DOD: В коде нет fallback-логики и mock-auth путей в production-потоке.

- [ ] [AUTH-007] Stage cleanup: remove unnecessary crypto/auth dependencies
Task Context: Проведи аудит auth зависимостей (jwt/crypto/cookie helpers) и оставь только минимально необходимый стек.
Task DOD: Лишние auth-пакеты удалены, lockfile и тесты обновлены.

- [ ] [AUTH-008] Stage cleanup: deduplicate token/session handling code
Task Context: Сконсолидируй общую логику issue/refresh/revoke токенов в единый сервисный слой.
Task DOD: Нет дублирования в контроллерах/сервисах, policy single-session реализован в одном месте.

- [ ] [AUTH-009] Stage security review: auth threat checks
Task Context: Проведи security review на replay, token theft, fixation, CSRF/XSS взаимодействие с cookie-моделью.
Task DOD: Риски закрыты конкретными мерами и тестами, документированы остаточные ограничения.

- [ ] [AUTH-010] Stage codebase hygiene: finalize auth docs and runbooks
Task Context: Обнови документацию по auth flow, lifecycle токенов и процедурам troubleshooting.
Task DOD: Runbook воспроизводим, auth-сценарии понятны для разработки и эксплуатации.

## Stage 4. Bot Flows (grammY)

- [ ] [BOT-001] Implement persistent keyboard and primary commands
Task Context: Реализуй постоянную клавиатуру с командами `Expense`, `Income`, `Transfer`, `Edit Last`, `Open Mini App` согласно UX PRD.
Task DOD: Пользователь может начать любой основной поток без свободного ввода текста, команды стабильны между сессиями.

- [ ] [BOT-002] Implement expense and income multi-step drafts
Task Context: Добавь stateful сценарий `amount -> category -> account -> confirm` c дефолтом `Основная карта`, скоростью ввода <=5 секунд.
Task DOD: Потоки завершаются созданием транзакции через API, валидации и happy-path/negative-path покрыты тестами.

- [ ] [BOT-003] Implement transfer flow with dual-amount support
Task Context: Реализуй transfer-драфт с source/destination счетами и поддержкой двух сумм для мультивалюты.
Task DOD: Transfer создается корректно и не искажает expense/income аналитику.

- [ ] [BOT-004] Implement category search/create and date selection
Task Context: Добавь поиск категории по 1-3 символам, создание custom category и ручной выбор даты/времени транзакции.
Task DOD: Поиск/создание/дата работают из всех релевантных потоков, API контракты соблюдены.

- [ ] [BOT-005] Implement confirmation and Edit Last flow
Task Context: После создания транзакции отправляй подтверждение и кнопку `Edit Last` без ограничения по времени, редактируя сумму/категорию/счет.
Task DOD: `Edit Last` стабильно обновляет последнюю транзакцию пользователя, UX соответствует PRD acceptance criteria.

- [ ] [BOT-006] Stage cleanup: remove outdated bot scenes and handlers
Task Context: Удали старые/временные сцены, экспериментальные handlers и неиспользуемые callback routes.
Task DOD: Роутинг бота чистый, только актуальные production-сценарии.

- [ ] [BOT-007] Stage cleanup: remove unused bot helper libraries
Task Context: Очисти bot-проект от неиспользуемых middleware/plugin пакетов и устаревших утилит.
Task DOD: Dependency footprint сокращен без регрессий в runtime.

- [ ] [BOT-008] Stage cleanup: deduplicate draft and validation logic
Task Context: Вынеси общую логику драфтов, шагов, подтверждений и валидации в reusable модули.
Task DOD: Код шагов не дублируется между Expense/Income/Transfer, читаемость и покрытие тестами улучшены.

- [ ] [BOT-009] Stage security review: callback and session abuse protection
Task Context: Проверь защиту callback данных, ограничение повторов, корректную привязку событий к user session.
Task DOD: Нет критичных векторов spoofing/replay в bot flow, добавлены проверки и тест-кейсы.

- [ ] [BOT-010] Stage codebase hygiene: align bot UX texts and docs
Task Context: Приведи тексты, команды и документацию по bot flow к единому стилю и актуальной реализации.
Task DOD: Все команды/ответы согласованы, docs соответствуют фактическому UX.

## Stage 5. Mini App UI (React + Vite)

- [ ] [UI-001] Set up authenticated Mini App shell
Task Context: Реализуй базовый shell mini app с Telegram init, auth bootstrap, error boundary и route layout для Home/Anomalies/History/Accounts/Settings.
Task DOD: Приложение открывается из бота, аутентифицируется через API и устойчиво обрабатывает сбои сети/сессии.

- [ ] [UI-002] Implement Home dashboard blocks and Net Worth row
Task Context: Реализуй Home: быстрые кнопки добавления, balances по счетам в валюте счета, структура расходов месяца, строка Net Worth (RUB).
Task DOD: Home отображает все 3 блока + Net Worth в соответствии с PRD и использует типизированный API client.

- [ ] [UI-003] Implement Anomalies page with 3-month rule
Task Context: Сделай экран аномалий: последний завершенный месяц, норма на базе 3 месяцев +20%, persistent коэффициент на категорию.
Task DOD: При <3 месяцев данные не показываются, top anomaly вычисляется и отображается корректно.

- [ ] [UI-004] Implement History with filters and transaction edit
Task Context: Добавь страницу истории с фильтрами `category/period/type`, списком транзакций и формой редактирования любой транзакции.
Task DOD: Фильтры и редактирование работают end-to-end через API, изменения отражаются в UI без ручной перезагрузки.

- [ ] [UI-005] Implement Accounts, category rename, export and deep link
Task Context: Реализуй управление счетами, переименование категорий, запуск CSV export и deep link переход в бот для быстрых действий.
Task DOD: Все действия доступны из Mini App и проходят по acceptance criteria V1.

- [ ] [UI-006] Stage cleanup: remove obsolete UI prototypes
Task Context: Удали старые прототипные компоненты/роуты/фикстуры, неиспользуемые после финализации экранов.
Task DOD: В UI отсутствуют мертвые страницы и неиспользуемые элементы.

- [ ] [UI-007] Stage cleanup: remove unused frontend dependencies
Task Context: Проведи аудит зависимостей UI (state/chart/form/date libs), удалив лишние и дублирующие пакеты.
Task DOD: Bundle size и dependency tree оптимизированы, функциональность не нарушена.

- [ ] [UI-008] Stage cleanup: deduplicate UI state and API adapters
Task Context: Устрани дублирование в hooks/selectors/query keys и маппингах DTO -> view models.
Task DOD: Общая логика переиспользуется, код экранов упрощен и единообразен.

- [ ] [UI-009] Stage security review: Mini App client hardening
Task Context: Проверь безопасное хранение session state, обработку auth-expired, защиту от unsafe render и лишних данных в логах.
Task DOD: Клиентский security checklist закрыт, критичные риски закрыты кодом и тестами.

- [ ] [UI-010] Stage codebase hygiene: finalize UX copy, accessibility, and docs
Task Context: Приведи финальные тексты, базовую доступность (labels/focus/empty states) и документацию UI-потоков.
Task DOD: UX консистентен, базовые accessibility требования соблюдены, docs актуальны.

## Stage 6. FX + Net Worth Engine

- [ ] [FX-001] Implement FX rate provider (CBR) with persistence
Task Context: Реализуй интеграцию с CBR: on-demand fetch, хранение курсов, whitelist валют `RUB, USD, EUR, SOM`, timestamp актуальности.
Task DOD: Курсы сохраняются в БД, provider возвращает корректные значения и ошибки для невалидных валют.

- [ ] [FX-002] Implement FX stale policy and fail-closed behavior
Task Context: Добавь политику свежести FX (<=24h для UI, fail-closed после 7 дней по TECHSPEC рискам), плюс user-facing признак stale.
Task DOD: При устаревших курсах поведение строгое и предсказуемое, тестами покрыты границы TTL.

- [ ] [FX-003] Implement net-worth current calculation endpoint
Task Context: Реализуй `/net-worth/current` с breakdown по счетам/категориям активов и приведением к RUB по актуальным FX.
Task DOD: Endpoint возвращает корректный net worth и breakdown, Transfer корректно влияет только на межсчетовую структуру.

- [ ] [FX-004] Freeze FX in snapshots and preserve history consistency
Task Context: Гарантируй правило: история snapshot не пересчитывается новыми курсами; applied FX фиксируется в snapshot данных.
Task DOD: Повторный расчет прошлых периодов сохраняет исходный FX, regression тесты подтверждают неизменность истории.

- [ ] [FX-005] Expose contracts for net-worth and FX status
Task Context: Обнови OpenAPI и `@expense/contracts` для net worth и индикатора stale/health.
Task DOD: UI и scheduler используют типобезопасные контракты без ручного дублирования типов.

- [ ] [FX-006] Stage cleanup: remove temporary FX adapters
Task Context: Удали временные mock providers и заглушки интеграции FX.
Task DOD: В production-коде только боевой provider и необходимые fallback-ветки.

- [ ] [FX-007] Stage cleanup: remove unused calculation utilities
Task Context: Очисти модуль вычислений от неиспользуемых helper-функций и устаревших формул.
Task DOD: В модуле нет dead code, покрытие ключевых формул сохранено.

- [ ] [FX-008] Stage cleanup: deduplicate currency conversion logic
Task Context: Сконсолидируй конвертацию валют и rounding policy в единый сервис, используемый API и jobs.
Task DOD: Конвертация реализована в одном месте, consistency подтверждена тестами.

- [ ] [FX-009] Stage security review: external provider and data integrity
Task Context: Проверь обработку сетевых ошибок, timeouts, валидацию внешних данных и защиту от частичных записей курсов.
Task DOD: Integrity и resilience меры внедрены, аварийные сценарии покрыты интеграционными тестами.

- [ ] [FX-010] Stage codebase hygiene: finalize formulas and engine docs
Task Context: Обнови техническую документацию формул net worth, stale policy и storage схемы.
Task DOD: Документация соответствует коду и может быть использована для аудита расчета.

## Stage 7. Snapshots & Jobs

- [ ] [JOB-001] Implement weekly and monthly snapshot jobs
Task Context: Реализуй jobs для weekly snapshot (Mon 00:00 MSK) и monthly snapshot (1st 00:00 MSK) с учетом правил strict monthly и допущений onboarding.
Task DOD: Snapshot записи создаются по расписанию с корректным `as_of_msk`, есть защита от повторного исполнения.

- [ ] [JOB-002] Implement transaction-edit recomputation boundaries
Task Context: При редактировании исторических транзакций пересчитывай только ближайшие будущие boundaries (weekly/monthly) по ADR из TECHSPEC.
Task DOD: Boundary recompute работает точно по правилам, есть тесты примеров из TECHSPEC.

- [ ] [JOB-003] Implement weekly digest notification pipeline
Task Context: Сделай weekly digest с 3 пунктами (Net Worth, расходы недели, кнопка Mini App) и отправкой через bot transport.
Task DOD: Digest генерируется и отправляется по расписанию, контент соответствует PRD.

- [ ] [JOB-004] Implement monthly export reminder job
Task Context: Добавь напоминание про CSV экспорт на 1-е число 10:00 MSK для mitigation риска потери данных.
Task DOD: Reminder запускается по расписанию и корректно доставляется пользователю.

- [ ] [JOB-005] Expose internal jobs control endpoints
Task Context: Реализуй `/internal/jobs/*` для health/manual trigger/status с защищенным доступом.
Task DOD: Internal endpoints доступны только авторизованному internal контексту, покрыты тестами и документацией.

- [ ] [JOB-006] Stage cleanup: remove temporary schedulers and scripts
Task Context: Удали одноразовые cron-скрипты и локальные workaround-обвязки после запуска штатного scheduler container.
Task DOD: Остается единый production-путь запуска jobs.

- [ ] [JOB-007] Stage cleanup: remove unused queue/scheduler dependencies
Task Context: Очисти зависимости scheduler от неиспользуемых транспортов и планировщиков.
Task DOD: Зависимости минимальны, runtime стабилен.

- [ ] [JOB-008] Stage cleanup: deduplicate job orchestration logic
Task Context: Вынеси общие шаблоны retry/idempotency/locking для jobs в shared слой.
Task DOD: Повторяющийся orchestration-код устранен, поведение jobs консистентно.

- [ ] [JOB-009] Stage security review: internal endpoints and cron execution
Task Context: Проверь доступ к internal routes, секреты scheduler, replay/manual trigger abuse и audit trail job-запусков.
Task DOD: Critical security gaps закрыты, есть журналирование и контроль доступа.

- [ ] [JOB-010] Stage codebase hygiene: finalize runbooks and observability
Task Context: Обнови runbooks мониторинга jobs, алертов и процедур восстановления после сбоев.
Task DOD: Эксплуатационная документация достаточна для on-call сопровождения.

## Stage 8. Operations & Deployment

- [ ] [OPS-001] Create production Docker Compose topology
Task Context: Подготовь production-compose для `api`, `ui`, `bot`, `scheduler`, reverse proxy и shared network/volumes.
Task DOD: Полный стек поднимается одной командой в целевом окружении, есть healthchecks и restart policy.

- [ ] [OPS-002] Configure nginx routing and TLS termination
Task Context: Настрой nginx маршрутизацию по сервисам, TLS termination, безопасные заголовки и HSTS.
Task DOD: HTTPS включен для всех внешних endpoint, маршрутизация корректна, безопасность заголовков подтверждена.

- [ ] [OPS-003] Automate certbot renewal and secret management baseline
Task Context: Настрой выпуск/автообновление сертификатов certbot и стандарт работы с `.env`/секретами без хранения секретов в репозиториях.
Task DOD: Сертификаты обновляются автоматически, секреты передаются безопасно и документированы.

- [ ] [OPS-004] Build deploy pipeline for VPS rollout
Task Context: Реализуй CI/CD сценарий выката на VPS: build images, publish, pull+restart, basic smoke checks и rollback steps.
Task DOD: Деплой воспроизводим и автоматизирован, rollback-инструкция проверена.

- [ ] [OPS-005] Add observability baseline (logs, metrics, uptime)
Task Context: Внедри минимальный мониторинг: структурированные логи, ключевые метрики, uptime-check и алерты на критические сбои.
Task DOD: Есть видимость состояния всех сервисов и понятные сигналы инцидентов.

- [ ] [OPS-006] Stage cleanup: remove temporary deployment scripts
Task Context: Удали ручные/временные deploy скрипты и локальные обходные решения после стабилизации pipeline.
Task DOD: Остается единый путь деплоя, нет устаревших entrypoint-скриптов.

- [ ] [OPS-007] Stage cleanup: remove unused infrastructure components
Task Context: Проведи аудит compose/nginx/CI компонентов и удали неиспользуемые сервисы, volume, network и steps.
Task DOD: Инфраструктурная конфигурация минимальна и понятна.

- [ ] [OPS-008] Stage cleanup: deduplicate environment and deployment config
Task Context: Унифицируй env-переменные, шаблоны compose и deploy steps, убрав повторяющиеся определения.
Task DOD: Конфигурации консистентны между stage/prod, нет дублирования ключевых настроек.

- [ ] [OPS-009] Stage security review: infrastructure hardening
Task Context: Проверь firewall, открытые порты, TLS настройки, секреты CI/CD и права на хосте по принципу least privilege.
Task DOD: Базовый hardening завершен, security checklist и remediation actions документированы.

- [ ] [OPS-010] Stage codebase hygiene: finalize ops documentation
Task Context: Подготовь финальный playbook развертывания и эксплуатации (setup, deploy, rollback, incident flow).
Task DOD: Документация достаточна для повторяемой передачи эксплуатации без устных договоренностей.

## Stage 9. Export & Hard Delete + Recovery

- [ ] [REC-001] Implement CSV transactions export endpoint and flow
Task Context: Реализуй экспорт только транзакций в CSV (по требованиям PRD/TECHSPEC), включая корректную кодировку, timezone и поля.
Task DOD: Пользователь получает корректный CSV-файл транзакций, формат стабилен и покрыт тестами.

- [ ] [REC-002] Implement monthly export reminder UX integration
Task Context: Свяжи scheduler reminder с bot/ui UX: понятный call-to-action, подтверждение выполнения экспорта и idempotent поведение.
Task DOD: Напоминание приводит к успешному экспорту, повторные клики безопасны.

- [ ] [REC-003] Implement hard delete with OTP confirmation
Task Context: Реализуй hard delete с OTP (6 digits, TTL 5 min, 3 attempts), полное удаление пользовательских данных и аудит события.
Task DOD: Данные удаляются полностью после валидного OTP, лимиты попыток и TTL соблюдаются.

- [ ] [REC-004] Implement recovery and rebind user identity flow
Task Context: Реализуй recovery-code процесс перепривязки `user_id` после hard delete/утраты доступа с безопасной верификацией.
Task DOD: Recovery flow работает end-to-end и не допускает неавторизованного rebind.

- [ ] [REC-005] Validate end-to-end data lifecycle scenarios
Task Context: Покрой интеграционными сценариями полный цикл: создание данных -> экспорт -> delete -> recovery/rebind.
Task DOD: E2E сценарии проходят, поведение соответствует Data & Security acceptance criteria.

- [ ] [REC-006] Stage cleanup: remove temporary recovery and export stubs
Task Context: Удали временные OTP/recovery/export заглушки, фиктивные коды и dev-only endpoints.
Task DOD: В кодовой базе только production-реализация жизненного цикла данных.

- [ ] [REC-007] Stage cleanup: remove unused data-lifecycle dependencies
Task Context: Удали лишние пакеты, добавленные в процессе реализации export/delete/recovery.
Task DOD: Dependency tree очищен, функциональные тесты зеленые.

- [ ] [REC-008] Stage cleanup: deduplicate OTP and recovery logic
Task Context: Сконсолидируй генерацию/валидацию OTP, лимиты попыток и recovery checks в общий security сервис.
Task DOD: Нет дублирования критичной security логики между API и интеграционными слоями.

- [ ] [REC-009] Stage security review: destructive action safeguards
Task Context: Проведи отдельный аудит destructive flow: brute force OTP, account takeover, race conditions удаления/восстановления.
Task DOD: Добавлены защиты и тесты на критичные угрозы, остаточные риски задокументированы.

- [ ] [REC-010] Stage codebase hygiene: finalize compliance-facing docs
Task Context: Обнови документацию по политике удаления данных, recovery ограничениям и пользовательским предупреждениям.
Task DOD: Документация прозрачна и соответствует фактическому поведению системы.
