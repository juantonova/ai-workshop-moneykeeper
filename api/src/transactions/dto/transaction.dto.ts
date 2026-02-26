import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsDateString,
  IsPositive,
  Min,
  ValidateIf,
} from "class-validator";

export enum TransactionType {
  EXPENSE = "EXPENSE",
  INCOME = "INCOME",
  TRANSFER = "TRANSFER",
  OPENING_BALANCE = "OPENING_BALANCE",
}

export enum TransactionStatus {
  ACTIVE = "ACTIVE",
  VOID = "VOID",
}

/**
 * DTO for creating a transaction.
 * Validation rules depend on transaction type:
 * - EXPENSE/INCOME: require accountId, categoryId, amount
 * - TRANSFER: require fromAccountId, toAccountId, amountFrom, amountTo
 */
export class CreateTransactionDto {
  @IsEnum(TransactionType)
  type!: TransactionType;

  @IsDateString()
  occurredAtUtc!: string;

  // For EXPENSE, INCOME, OPENING_BALANCE
  @ValidateIf((o) =>
    ["EXPENSE", "INCOME", "OPENING_BALANCE"].includes(o.type),
  )
  @IsInt()
  @Min(1)
  accountId?: number;

  @ValidateIf((o) => ["EXPENSE", "INCOME"].includes(o.type))
  @IsInt()
  @Min(1)
  categoryId?: number;

  @ValidateIf((o) =>
    ["EXPENSE", "INCOME", "OPENING_BALANCE"].includes(o.type),
  )
  @IsNumber()
  @IsPositive()
  amount?: number;

  // For TRANSFER
  @ValidateIf((o) => o.type === "TRANSFER")
  @IsInt()
  @Min(1)
  fromAccountId?: number;

  @ValidateIf((o) => o.type === "TRANSFER")
  @IsInt()
  @Min(1)
  toAccountId?: number;

  @ValidateIf((o) => o.type === "TRANSFER")
  @IsNumber()
  @IsPositive()
  amountFrom?: number;

  @ValidateIf((o) => o.type === "TRANSFER")
  @IsNumber()
  @IsPositive()
  amountTo?: number;
}

/**
 * DTO for updating a transaction.
 * Rules:
 * - TRANSFER: cannot change from/to accounts, only amounts and date
 * - EXPENSE/INCOME: can change amount, category, account, date
 */
export class UpdateTransactionDto {
  @IsOptional()
  @IsDateString()
  occurredAtUtc?: string;

  // For EXPENSE, INCOME
  @IsOptional()
  @IsInt()
  @Min(1)
  accountId?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  categoryId?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount?: number;

  // For TRANSFER - only amounts can be changed
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amountFrom?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  amountTo?: number;
}

/**
 * DTO for transaction response
 */
export class TransactionDto {
  id!: number;
  userId!: number;
  type!: string;
  status!: string;
  occurredAtUtc!: string;
  createdAtUtc!: string;
  updatedAtUtc!: string;

  // For EXPENSE, INCOME, OPENING_BALANCE
  accountId?: number | null;
  categoryId?: number | null;
  amount?: string | null;

  // For TRANSFER
  fromAccountId?: number | null;
  toAccountId?: number | null;
  amountFrom?: string | null;
  amountTo?: string | null;
}

/**
 * Query parameters for listing transactions
 */
export class TransactionQueryDto {
  @IsOptional()
  @IsEnum(["expense", "income", "transfer", "opening", "all"])
  type?: string;

  @IsOptional()
  @IsDateString()
  date_from?: string;

  @IsOptional()
  @IsDateString()
  date_to?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  category_id?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  offset?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number;
}
