export declare const AccountCurrency: {
    readonly RUB: "RUB";
    readonly USD: "USD";
    readonly EUR: "EUR";
    readonly KGS: "KGS";
};
export type AccountCurrency = (typeof AccountCurrency)[keyof typeof AccountCurrency];
export declare const AccountType: {
    readonly CASH: "CASH";
    readonly INVESTMENT: "INVESTMENT";
};
export type AccountType = (typeof AccountType)[keyof typeof AccountType];
export declare const CategoryType: {
    readonly EXPENSE: "EXPENSE";
    readonly INCOME: "INCOME";
};
export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];
export declare const TransactionType: {
    readonly EXPENSE: "EXPENSE";
    readonly INCOME: "INCOME";
    readonly TRANSFER: "TRANSFER";
    readonly OPENING_BALANCE: "OPENING_BALANCE";
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
export declare const TransactionStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly VOID: "VOID";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
