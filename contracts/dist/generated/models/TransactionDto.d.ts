export type TransactionDto = {
    id: number;
    type: "EXPENSE" | "INCOME" | "TRANSFER";
    amount: number;
    accountId: number;
    categoryId?: number;
    occurredAtUtc: string;
};
