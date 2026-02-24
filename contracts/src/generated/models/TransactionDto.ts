/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TransactionDto = {
    id: number;
    type: 'EXPENSE' | 'INCOME' | 'TRANSFER';
    amount: number;
    accountId: number;
    categoryId?: number;
    occurredAtUtc: string;
};

