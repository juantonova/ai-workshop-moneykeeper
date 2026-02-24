export type CreateTransactionRequestDto = {
    type: 'EXPENSE' | 'INCOME' | 'TRANSFER';
    amount: number;
    accountId: number;
    categoryId?: number;
    occurredAtUtc: string;
};
