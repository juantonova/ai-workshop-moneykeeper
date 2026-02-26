import { IsInt, IsString, IsEnum, IsBoolean, IsDateString, Min } from "class-validator";

export enum AccountCurrency {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
  KGS = "KGS",
}

export enum AccountType {
  CASH = "CASH",
  INVESTMENT = "INVESTMENT",
}

export class CreateAccountDto {
  @IsString()
  name: string;

  @IsEnum(AccountCurrency)
  currency: AccountCurrency;

  @IsEnum(AccountType)
  type: AccountType;
}

export class UpdateAccountDto {
  @IsString()
  name: string;
}

export class AccountDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsInt()
  @Min(1)
  userId: number;

  @IsString()
  name: string;

  @IsEnum(AccountCurrency)
  currency: AccountCurrency;

  @IsEnum(AccountType)
  type: AccountType;

  @IsBoolean()
  archived: boolean;

  @IsDateString()
  createdAtUtc: string;

  @IsDateString()
  updatedAtUtc: string;
}

export class BalanceDto {
  @IsInt()
  @Min(1)
  accountId: number;

  @IsString()
  accountName: string;

  @IsEnum(AccountCurrency)
  currency: AccountCurrency;

  @IsString()
  balance: string;
}
