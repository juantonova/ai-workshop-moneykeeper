# ADR-0013: NestJS + TypeScript структура API с CRUD модулями (API-002)

## Статус

Принято

## Контекст

Для реализации задачи API-002 требовалось:
- Создать полноценное NestJS приложение с TypeScript.
- Реализовать CRUD endpoints для Accounts и Categories модулей.
- Настроить валидацию входных данных.
- Реализовать унифицированную обработку ошибок.
- Интегрировать Prisma Client для работы с БД.

При реализации выявилась специфика работы с Prisma Client 7.x, требующая особого подхода к инициализации.

## Решение

### 1. Архитектура приложения

Приняли модульную архитектуру NestJS:
- `PrismaModule` (глобальный) — предоставляет `PrismaService` для всех модулей.
- `AccountsModule` — CRUD для счетов с бизнес-логикой расчета балансов.
- `CategoriesModule` — CRUD для категорий с правилами переименования.
- `HealthController` — health check endpoint.
- `HttpExceptionFilter` (глобальный) — унифицированная обработка ошибок.

### 2. PrismaService реализация

Из-за особенностей Prisma Client 7.x использован **composition pattern** вместо наследования:
```typescript
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private client: PrismaClient;
  
  constructor() {
    this.client = new PrismaClient({} as any);
  }
  
  // Proxy getters для доступа к моделям
  get account() { return this.client.account; }
  get category() { return this.client.category; }
  // ...
}
```

**Обоснование**: Prisma Client 7.x требует явной конфигурации, а подход с composition позволяет гибко управлять инициализацией и предоставлять типобезопасный доступ к моделям.

### 3. Валидация данных

Использованы `class-validator` и `class-transformer`:
- DTOs с декораторами валидации (`@IsString()`, `@IsEnum()`, `@Min()`, etc.).
- Global `ValidationPipe` в `main.ts` с параметрами:
  - `whitelist: true` — отбрасывает неизвестные поля.
  - `forbidNonWhitelisted: true` — возвращает ошибку при наличии неизвестных полей.
  - `transform: true` — автоматическое преобразование типов.

### 4. Обработка ошибок

Реализован `HttpExceptionFilter`:
- Ловит все исключения (не только HttpException).
- Преобразует их в единый формат `ErrorResponseDto` с полями `code`, `message`, `details`.
- Автоматический маппинг HTTP статусов в бизнес-коды (например, 404 → `NOT_FOUND`).

Для бизнес-ошибок используются специфичные коды:
- `ACCOUNT_NOT_FOUND`, `ACCOUNT_BALANCE_NOT_ZERO`, `ACCOUNT_ALREADY_ARCHIVED`
- `CATEGORY_ALREADY_EXISTS`, `CATEGORY_NOT_FOUND`, `INCOME_CATEGORY_IMMUTABLE`, `CATEGORY_NAME_CONFLICT`

### 5. Бизнес-логика модулей

**AccountsService**:
- Расчет баланса на основе всех транзакций (OPENING_BALANCE, INCOME, EXPENSE, TRANSFER).
- Правило архивирования: баланс должен быть строго 0.00.
- Метод `getBalances()` для получения балансов только активных счетов.

**CategoriesService**:
- Нормализация имен категорий (trim + lowercase) для обеспечения уникальности.
- Правило переименования: income-категории нельзя переименовывать (immutable).
- Проверка уникальности при создании и переименовании.

### 6. OpenAPI контракт

Контракт обновлен в `openapi.source.json`:
- Все CRUD операции описаны с request/response schemas.
- Error responses документированы для каждого endpoint.
- Используется формат OpenAPI 3.0.3 для совместимости с существующей генерацией.

### 7. Тестирование

На данном этапе:
- Добавлен baseline test для проверки сборки.
- Полные интеграционные тесты планируются на следующих этапах (из-за сложностей с Prisma Client 7.x в тестовой среде).

## Последствия

### Плюсы

- Четкая модульная структура, легко масштабируемая.
- Типобезопасность на всех уровнях (TypeScript + DTOs).
- Автоматическая валидация входных данных.
- Унифицированная обработка ошибок.
- Готовая основа для добавления новых модулей (Transactions, Auth, etc.).
- OpenAPI контракт как source of truth для клиентов.

### Минусы

- Prisma Client 7.x требует нестандартного подхода к инициализации (composition вместо наследования).
- ESLint конфиг пока настроен только для .js файлов, требуется расширение для TypeScript.
- Интеграционное тестирование требует дополнительной настройки из-за специфики Prisma Client 7.x.

### Технический долг

- Добавить поддержку TypeScript в ESLint конфиг.
- Реализовать полноценные интеграционные/e2e тесты с тестовой БД.
- Убрать MOCK_USER_ID из контроллеров после реализации auth module.
