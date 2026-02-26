export declare enum AccountCurrency {
    RUB = "RUB",
    USD = "USD",
    EUR = "EUR",
    KGS = "KGS"
}
export declare enum AccountType {
    CASH = "CASH",
    INVESTMENT = "INVESTMENT"
}
export declare class CreateAccountDto {
    name: string;
    currency: AccountCurrency;
    type: AccountType;
}
export declare class UpdateAccountDto {
    name: string;
}
export declare class AccountDto {
    id: number;
    userId: number;
    name: string;
    currency: AccountCurrency;
    type: AccountType;
    archived: boolean;
    createdAtUtc: string;
    updatedAtUtc: string;
}
export declare class BalanceDto {
    accountId: number;
    accountName: string;
    currency: AccountCurrency;
    balance: string;
}
