-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telegram_user_id" TEXT NOT NULL,
    "onboarding_started_at_utc" DATETIME,
    "onboarding_completed" BOOLEAN NOT NULL DEFAULT false,
    "recovery_code_hash" TEXT,
    "created_at_utc" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "refresh_sessions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "refresh_token_hash" TEXT NOT NULL,
    "expires_at_utc" DATETIME NOT NULL,
    "rotated_at_utc" DATETIME NOT NULL,
    "created_at_utc" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" DATETIME NOT NULL,
    CONSTRAINT "refresh_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'CASH',
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "created_at_utc" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" DATETIME NOT NULL,
    CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "normalized_name" TEXT NOT NULL,
    "created_at_utc" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" DATETIME NOT NULL,
    CONSTRAINT "categories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "occurred_at_utc" DATETIME NOT NULL,
    "created_at_utc" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at_utc" DATETIME NOT NULL,
    "account_id" INTEGER,
    "category_id" INTEGER,
    "from_account_id" INTEGER,
    "to_account_id" INTEGER,
    "amount" DECIMAL,
    "amount_from" DECIMAL,
    "amount_to" DECIMAL,
    CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "transactions_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transactions_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transactions_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transactions_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_telegram_user_id_key" ON "users"("telegram_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_sessions_user_id_key" ON "refresh_sessions"("user_id");

-- CreateIndex
CREATE INDEX "refresh_sessions_expires_at_utc_idx" ON "refresh_sessions"("expires_at_utc");

-- CreateIndex
CREATE INDEX "accounts_user_id_idx" ON "accounts"("user_id");

-- CreateIndex
CREATE INDEX "accounts_user_id_archived_idx" ON "accounts"("user_id", "archived");

-- CreateIndex
CREATE INDEX "categories_user_id_type_idx" ON "categories"("user_id", "type");

-- CreateIndex
CREATE UNIQUE INDEX "categories_user_id_type_normalized_name_key" ON "categories"("user_id", "type", "normalized_name");

-- CreateIndex
CREATE INDEX "transactions_user_id_occurred_at_utc_idx" ON "transactions"("user_id", "occurred_at_utc");

-- CreateIndex
CREATE INDEX "transactions_user_id_type_occurred_at_utc_idx" ON "transactions"("user_id", "type", "occurred_at_utc");

-- CreateIndex
CREATE INDEX "transactions_user_id_status_occurred_at_utc_idx" ON "transactions"("user_id", "status", "occurred_at_utc");

-- CreateIndex
CREATE INDEX "transactions_account_id_idx" ON "transactions"("account_id");

-- CreateIndex
CREATE INDEX "transactions_category_id_idx" ON "transactions"("category_id");

-- CreateIndex
CREATE INDEX "transactions_from_account_id_idx" ON "transactions"("from_account_id");

-- CreateIndex
CREATE INDEX "transactions_to_account_id_idx" ON "transactions"("to_account_id");
