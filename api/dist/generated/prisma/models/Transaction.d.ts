import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Transaction
 *
 */
export type TransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$TransactionPayload>;
export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
export type TransactionAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    accountId: number | null;
    categoryId: number | null;
    fromAccountId: number | null;
    toAccountId: number | null;
    amount: runtime.Decimal | null;
    amountFrom: runtime.Decimal | null;
    amountTo: runtime.Decimal | null;
};
export type TransactionSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    accountId: number | null;
    categoryId: number | null;
    fromAccountId: number | null;
    toAccountId: number | null;
    amount: runtime.Decimal | null;
    amountFrom: runtime.Decimal | null;
    amountTo: runtime.Decimal | null;
};
export type TransactionMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    occurredAtUtc: Date | null;
    createdAtUtc: Date | null;
    updatedAtUtc: Date | null;
    accountId: number | null;
    categoryId: number | null;
    fromAccountId: number | null;
    toAccountId: number | null;
    amount: runtime.Decimal | null;
    amountFrom: runtime.Decimal | null;
    amountTo: runtime.Decimal | null;
};
export type TransactionMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    occurredAtUtc: Date | null;
    createdAtUtc: Date | null;
    updatedAtUtc: Date | null;
    accountId: number | null;
    categoryId: number | null;
    fromAccountId: number | null;
    toAccountId: number | null;
    amount: runtime.Decimal | null;
    amountFrom: runtime.Decimal | null;
    amountTo: runtime.Decimal | null;
};
export type TransactionCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    status: number;
    occurredAtUtc: number;
    createdAtUtc: number;
    updatedAtUtc: number;
    accountId: number;
    categoryId: number;
    fromAccountId: number;
    toAccountId: number;
    amount: number;
    amountFrom: number;
    amountTo: number;
    _all: number;
};
export type TransactionAvgAggregateInputType = {
    id?: true;
    userId?: true;
    accountId?: true;
    categoryId?: true;
    fromAccountId?: true;
    toAccountId?: true;
    amount?: true;
    amountFrom?: true;
    amountTo?: true;
};
export type TransactionSumAggregateInputType = {
    id?: true;
    userId?: true;
    accountId?: true;
    categoryId?: true;
    fromAccountId?: true;
    toAccountId?: true;
    amount?: true;
    amountFrom?: true;
    amountTo?: true;
};
export type TransactionMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    status?: true;
    occurredAtUtc?: true;
    createdAtUtc?: true;
    updatedAtUtc?: true;
    accountId?: true;
    categoryId?: true;
    fromAccountId?: true;
    toAccountId?: true;
    amount?: true;
    amountFrom?: true;
    amountTo?: true;
};
export type TransactionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    status?: true;
    occurredAtUtc?: true;
    createdAtUtc?: true;
    updatedAtUtc?: true;
    accountId?: true;
    categoryId?: true;
    fromAccountId?: true;
    toAccountId?: true;
    amount?: true;
    amountFrom?: true;
    amountTo?: true;
};
export type TransactionCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    status?: true;
    occurredAtUtc?: true;
    createdAtUtc?: true;
    updatedAtUtc?: true;
    accountId?: true;
    categoryId?: true;
    fromAccountId?: true;
    toAccountId?: true;
    amount?: true;
    amountFrom?: true;
    amountTo?: true;
    _all?: true;
};
export type TransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType;
};
export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaction[P]> : Prisma.GetScalarType<T[P], AggregateTransaction[P]>;
};
export type TransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithAggregationInput | Prisma.TransactionOrderByWithAggregationInput[];
    by: Prisma.TransactionScalarFieldEnum[] | Prisma.TransactionScalarFieldEnum;
    having?: Prisma.TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type TransactionGroupByOutputType = {
    id: number;
    userId: number;
    type: $Enums.TransactionType;
    status: $Enums.TransactionStatus;
    occurredAtUtc: Date;
    createdAtUtc: Date;
    updatedAtUtc: Date;
    accountId: number | null;
    categoryId: number | null;
    fromAccountId: number | null;
    toAccountId: number | null;
    amount: runtime.Decimal | null;
    amountFrom: runtime.Decimal | null;
    amountTo: runtime.Decimal | null;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]>;
}>>;
export type TransactionWhereInput = {
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    id?: Prisma.IntFilter<"Transaction"> | number;
    userId?: Prisma.IntFilter<"Transaction"> | number;
    type?: Prisma.EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    createdAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    accountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    fromAccountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    toAccountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    amount?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    account?: Prisma.XOR<Prisma.AccountNullableScalarRelationFilter, Prisma.AccountWhereInput> | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    fromAccount?: Prisma.XOR<Prisma.AccountNullableScalarRelationFilter, Prisma.AccountWhereInput> | null;
    toAccount?: Prisma.XOR<Prisma.AccountNullableScalarRelationFilter, Prisma.AccountWhereInput> | null;
};
export type TransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    occurredAtUtc?: Prisma.SortOrder;
    createdAtUtc?: Prisma.SortOrder;
    updatedAtUtc?: Prisma.SortOrder;
    accountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    toAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    amountFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    amountTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    account?: Prisma.AccountOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    fromAccount?: Prisma.AccountOrderByWithRelationInput;
    toAccount?: Prisma.AccountOrderByWithRelationInput;
};
export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    userId?: Prisma.IntFilter<"Transaction"> | number;
    type?: Prisma.EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    createdAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    accountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    fromAccountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    toAccountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    amount?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    account?: Prisma.XOR<Prisma.AccountNullableScalarRelationFilter, Prisma.AccountWhereInput> | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    fromAccount?: Prisma.XOR<Prisma.AccountNullableScalarRelationFilter, Prisma.AccountWhereInput> | null;
    toAccount?: Prisma.XOR<Prisma.AccountNullableScalarRelationFilter, Prisma.AccountWhereInput> | null;
}, "id">;
export type TransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    occurredAtUtc?: Prisma.SortOrder;
    createdAtUtc?: Prisma.SortOrder;
    updatedAtUtc?: Prisma.SortOrder;
    accountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    toAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    amountFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    amountTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TransactionCountOrderByAggregateInput;
    _avg?: Prisma.TransactionAvgOrderByAggregateInput;
    _max?: Prisma.TransactionMaxOrderByAggregateInput;
    _min?: Prisma.TransactionMinOrderByAggregateInput;
    _sum?: Prisma.TransactionSumOrderByAggregateInput;
};
export type TransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Transaction"> | number;
    type?: Prisma.EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    createdAtUtc?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    updatedAtUtc?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    accountId?: Prisma.IntNullableWithAggregatesFilter<"Transaction"> | number | null;
    categoryId?: Prisma.IntNullableWithAggregatesFilter<"Transaction"> | number | null;
    fromAccountId?: Prisma.IntNullableWithAggregatesFilter<"Transaction"> | number | null;
    toAccountId?: Prisma.IntNullableWithAggregatesFilter<"Transaction"> | number | null;
    amount?: Prisma.DecimalNullableWithAggregatesFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.DecimalNullableWithAggregatesFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.DecimalNullableWithAggregatesFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateInput = {
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
    account?: Prisma.AccountCreateNestedOneWithoutAccountTransactionsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutTransactionsInput;
    fromAccount?: Prisma.AccountCreateNestedOneWithoutFromAccountTransactionsInput;
    toAccount?: Prisma.AccountCreateNestedOneWithoutToAccountTransactionsInput;
};
export type TransactionUncheckedCreateInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    categoryId?: number | null;
    fromAccountId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUpdateInput = {
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput;
    account?: Prisma.AccountUpdateOneWithoutAccountTransactionsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutTransactionsNestedInput;
    fromAccount?: Prisma.AccountUpdateOneWithoutFromAccountTransactionsNestedInput;
    toAccount?: Prisma.AccountUpdateOneWithoutToAccountTransactionsNestedInput;
};
export type TransactionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateManyInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    categoryId?: number | null;
    fromAccountId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUpdateManyMutationInput = {
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionListRelationFilter = {
    every?: Prisma.TransactionWhereInput;
    some?: Prisma.TransactionWhereInput;
    none?: Prisma.TransactionWhereInput;
};
export type TransactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    occurredAtUtc?: Prisma.SortOrder;
    createdAtUtc?: Prisma.SortOrder;
    updatedAtUtc?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountFrom?: Prisma.SortOrder;
    amountTo?: Prisma.SortOrder;
};
export type TransactionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountFrom?: Prisma.SortOrder;
    amountTo?: Prisma.SortOrder;
};
export type TransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    occurredAtUtc?: Prisma.SortOrder;
    createdAtUtc?: Prisma.SortOrder;
    updatedAtUtc?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountFrom?: Prisma.SortOrder;
    amountTo?: Prisma.SortOrder;
};
export type TransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    occurredAtUtc?: Prisma.SortOrder;
    createdAtUtc?: Prisma.SortOrder;
    updatedAtUtc?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountFrom?: Prisma.SortOrder;
    amountTo?: Prisma.SortOrder;
};
export type TransactionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    fromAccountId?: Prisma.SortOrder;
    toAccountId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    amountFrom?: Prisma.SortOrder;
    amountTo?: Prisma.SortOrder;
};
export type TransactionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutUserInput, Prisma.TransactionUncheckedCreateWithoutUserInput> | Prisma.TransactionCreateWithoutUserInput[] | Prisma.TransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutUserInput | Prisma.TransactionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TransactionCreateManyUserInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutUserInput, Prisma.TransactionUncheckedCreateWithoutUserInput> | Prisma.TransactionCreateWithoutUserInput[] | Prisma.TransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutUserInput | Prisma.TransactionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TransactionCreateManyUserInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutUserInput, Prisma.TransactionUncheckedCreateWithoutUserInput> | Prisma.TransactionCreateWithoutUserInput[] | Prisma.TransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutUserInput | Prisma.TransactionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutUserInput | Prisma.TransactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TransactionCreateManyUserInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutUserInput | Prisma.TransactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutUserInput | Prisma.TransactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutUserInput, Prisma.TransactionUncheckedCreateWithoutUserInput> | Prisma.TransactionCreateWithoutUserInput[] | Prisma.TransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutUserInput | Prisma.TransactionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutUserInput | Prisma.TransactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TransactionCreateManyUserInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutUserInput | Prisma.TransactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutUserInput | Prisma.TransactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionCreateNestedManyWithoutAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutAccountInput, Prisma.TransactionUncheckedCreateWithoutAccountInput> | Prisma.TransactionCreateWithoutAccountInput[] | Prisma.TransactionUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutAccountInput | Prisma.TransactionCreateOrConnectWithoutAccountInput[];
    createMany?: Prisma.TransactionCreateManyAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionCreateNestedManyWithoutFromAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutFromAccountInput, Prisma.TransactionUncheckedCreateWithoutFromAccountInput> | Prisma.TransactionCreateWithoutFromAccountInput[] | Prisma.TransactionUncheckedCreateWithoutFromAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutFromAccountInput | Prisma.TransactionCreateOrConnectWithoutFromAccountInput[];
    createMany?: Prisma.TransactionCreateManyFromAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionCreateNestedManyWithoutToAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutToAccountInput, Prisma.TransactionUncheckedCreateWithoutToAccountInput> | Prisma.TransactionCreateWithoutToAccountInput[] | Prisma.TransactionUncheckedCreateWithoutToAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutToAccountInput | Prisma.TransactionCreateOrConnectWithoutToAccountInput[];
    createMany?: Prisma.TransactionCreateManyToAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutAccountInput, Prisma.TransactionUncheckedCreateWithoutAccountInput> | Prisma.TransactionCreateWithoutAccountInput[] | Prisma.TransactionUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutAccountInput | Prisma.TransactionCreateOrConnectWithoutAccountInput[];
    createMany?: Prisma.TransactionCreateManyAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutFromAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutFromAccountInput, Prisma.TransactionUncheckedCreateWithoutFromAccountInput> | Prisma.TransactionCreateWithoutFromAccountInput[] | Prisma.TransactionUncheckedCreateWithoutFromAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutFromAccountInput | Prisma.TransactionCreateOrConnectWithoutFromAccountInput[];
    createMany?: Prisma.TransactionCreateManyFromAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutToAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutToAccountInput, Prisma.TransactionUncheckedCreateWithoutToAccountInput> | Prisma.TransactionCreateWithoutToAccountInput[] | Prisma.TransactionUncheckedCreateWithoutToAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutToAccountInput | Prisma.TransactionCreateOrConnectWithoutToAccountInput[];
    createMany?: Prisma.TransactionCreateManyToAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutAccountInput, Prisma.TransactionUncheckedCreateWithoutAccountInput> | Prisma.TransactionCreateWithoutAccountInput[] | Prisma.TransactionUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutAccountInput | Prisma.TransactionCreateOrConnectWithoutAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: Prisma.TransactionCreateManyAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUpdateManyWithoutFromAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutFromAccountInput, Prisma.TransactionUncheckedCreateWithoutFromAccountInput> | Prisma.TransactionCreateWithoutFromAccountInput[] | Prisma.TransactionUncheckedCreateWithoutFromAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutFromAccountInput | Prisma.TransactionCreateOrConnectWithoutFromAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutFromAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutFromAccountInput[];
    createMany?: Prisma.TransactionCreateManyFromAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutFromAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutFromAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutFromAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutFromAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUpdateManyWithoutToAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutToAccountInput, Prisma.TransactionUncheckedCreateWithoutToAccountInput> | Prisma.TransactionCreateWithoutToAccountInput[] | Prisma.TransactionUncheckedCreateWithoutToAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutToAccountInput | Prisma.TransactionCreateOrConnectWithoutToAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutToAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutToAccountInput[];
    createMany?: Prisma.TransactionCreateManyToAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutToAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutToAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutToAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutToAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutAccountInput, Prisma.TransactionUncheckedCreateWithoutAccountInput> | Prisma.TransactionCreateWithoutAccountInput[] | Prisma.TransactionUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutAccountInput | Prisma.TransactionCreateOrConnectWithoutAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: Prisma.TransactionCreateManyAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutFromAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutFromAccountInput, Prisma.TransactionUncheckedCreateWithoutFromAccountInput> | Prisma.TransactionCreateWithoutFromAccountInput[] | Prisma.TransactionUncheckedCreateWithoutFromAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutFromAccountInput | Prisma.TransactionCreateOrConnectWithoutFromAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutFromAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutFromAccountInput[];
    createMany?: Prisma.TransactionCreateManyFromAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutFromAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutFromAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutFromAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutFromAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutToAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutToAccountInput, Prisma.TransactionUncheckedCreateWithoutToAccountInput> | Prisma.TransactionCreateWithoutToAccountInput[] | Prisma.TransactionUncheckedCreateWithoutToAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutToAccountInput | Prisma.TransactionCreateOrConnectWithoutToAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutToAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutToAccountInput[];
    createMany?: Prisma.TransactionCreateManyToAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutToAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutToAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutToAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutToAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutCategoryInput, Prisma.TransactionUncheckedCreateWithoutCategoryInput> | Prisma.TransactionCreateWithoutCategoryInput[] | Prisma.TransactionUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutCategoryInput | Prisma.TransactionCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.TransactionCreateManyCategoryInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutCategoryInput, Prisma.TransactionUncheckedCreateWithoutCategoryInput> | Prisma.TransactionCreateWithoutCategoryInput[] | Prisma.TransactionUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutCategoryInput | Prisma.TransactionCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.TransactionCreateManyCategoryInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutCategoryInput, Prisma.TransactionUncheckedCreateWithoutCategoryInput> | Prisma.TransactionCreateWithoutCategoryInput[] | Prisma.TransactionUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutCategoryInput | Prisma.TransactionCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutCategoryInput | Prisma.TransactionUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.TransactionCreateManyCategoryInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutCategoryInput | Prisma.TransactionUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutCategoryInput | Prisma.TransactionUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutCategoryInput, Prisma.TransactionUncheckedCreateWithoutCategoryInput> | Prisma.TransactionCreateWithoutCategoryInput[] | Prisma.TransactionUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutCategoryInput | Prisma.TransactionCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutCategoryInput | Prisma.TransactionUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.TransactionCreateManyCategoryInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutCategoryInput | Prisma.TransactionUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutCategoryInput | Prisma.TransactionUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
};
export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TransactionCreateWithoutUserInput = {
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    account?: Prisma.AccountCreateNestedOneWithoutAccountTransactionsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutTransactionsInput;
    fromAccount?: Prisma.AccountCreateNestedOneWithoutFromAccountTransactionsInput;
    toAccount?: Prisma.AccountCreateNestedOneWithoutToAccountTransactionsInput;
};
export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    categoryId?: number | null;
    fromAccountId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateOrConnectWithoutUserInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutUserInput, Prisma.TransactionUncheckedCreateWithoutUserInput>;
};
export type TransactionCreateManyUserInputEnvelope = {
    data: Prisma.TransactionCreateManyUserInput | Prisma.TransactionCreateManyUserInput[];
};
export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutUserInput, Prisma.TransactionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutUserInput, Prisma.TransactionUncheckedCreateWithoutUserInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutUserInput, Prisma.TransactionUncheckedUpdateWithoutUserInput>;
};
export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutUserInput>;
};
export type TransactionScalarWhereInput = {
    AND?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    OR?: Prisma.TransactionScalarWhereInput[];
    NOT?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    id?: Prisma.IntFilter<"Transaction"> | number;
    userId?: Prisma.IntFilter<"Transaction"> | number;
    type?: Prisma.EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    createdAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAtUtc?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    accountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    fromAccountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    toAccountId?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    amount?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateWithoutAccountInput = {
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutTransactionsInput;
    fromAccount?: Prisma.AccountCreateNestedOneWithoutFromAccountTransactionsInput;
    toAccount?: Prisma.AccountCreateNestedOneWithoutToAccountTransactionsInput;
};
export type TransactionUncheckedCreateWithoutAccountInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    categoryId?: number | null;
    fromAccountId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateOrConnectWithoutAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutAccountInput, Prisma.TransactionUncheckedCreateWithoutAccountInput>;
};
export type TransactionCreateManyAccountInputEnvelope = {
    data: Prisma.TransactionCreateManyAccountInput | Prisma.TransactionCreateManyAccountInput[];
};
export type TransactionCreateWithoutFromAccountInput = {
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
    account?: Prisma.AccountCreateNestedOneWithoutAccountTransactionsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutTransactionsInput;
    toAccount?: Prisma.AccountCreateNestedOneWithoutToAccountTransactionsInput;
};
export type TransactionUncheckedCreateWithoutFromAccountInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    categoryId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateOrConnectWithoutFromAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutFromAccountInput, Prisma.TransactionUncheckedCreateWithoutFromAccountInput>;
};
export type TransactionCreateManyFromAccountInputEnvelope = {
    data: Prisma.TransactionCreateManyFromAccountInput | Prisma.TransactionCreateManyFromAccountInput[];
};
export type TransactionCreateWithoutToAccountInput = {
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
    account?: Prisma.AccountCreateNestedOneWithoutAccountTransactionsInput;
    category?: Prisma.CategoryCreateNestedOneWithoutTransactionsInput;
    fromAccount?: Prisma.AccountCreateNestedOneWithoutFromAccountTransactionsInput;
};
export type TransactionUncheckedCreateWithoutToAccountInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    categoryId?: number | null;
    fromAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateOrConnectWithoutToAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutToAccountInput, Prisma.TransactionUncheckedCreateWithoutToAccountInput>;
};
export type TransactionCreateManyToAccountInputEnvelope = {
    data: Prisma.TransactionCreateManyToAccountInput | Prisma.TransactionCreateManyToAccountInput[];
};
export type TransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutAccountInput, Prisma.TransactionUncheckedUpdateWithoutAccountInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutAccountInput, Prisma.TransactionUncheckedCreateWithoutAccountInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutAccountInput, Prisma.TransactionUncheckedUpdateWithoutAccountInput>;
};
export type TransactionUpdateManyWithWhereWithoutAccountInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutAccountInput>;
};
export type TransactionUpsertWithWhereUniqueWithoutFromAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutFromAccountInput, Prisma.TransactionUncheckedUpdateWithoutFromAccountInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutFromAccountInput, Prisma.TransactionUncheckedCreateWithoutFromAccountInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutFromAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutFromAccountInput, Prisma.TransactionUncheckedUpdateWithoutFromAccountInput>;
};
export type TransactionUpdateManyWithWhereWithoutFromAccountInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutFromAccountInput>;
};
export type TransactionUpsertWithWhereUniqueWithoutToAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutToAccountInput, Prisma.TransactionUncheckedUpdateWithoutToAccountInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutToAccountInput, Prisma.TransactionUncheckedCreateWithoutToAccountInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutToAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutToAccountInput, Prisma.TransactionUncheckedUpdateWithoutToAccountInput>;
};
export type TransactionUpdateManyWithWhereWithoutToAccountInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutToAccountInput>;
};
export type TransactionCreateWithoutCategoryInput = {
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
    account?: Prisma.AccountCreateNestedOneWithoutAccountTransactionsInput;
    fromAccount?: Prisma.AccountCreateNestedOneWithoutFromAccountTransactionsInput;
    toAccount?: Prisma.AccountCreateNestedOneWithoutToAccountTransactionsInput;
};
export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    fromAccountId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutCategoryInput, Prisma.TransactionUncheckedCreateWithoutCategoryInput>;
};
export type TransactionCreateManyCategoryInputEnvelope = {
    data: Prisma.TransactionCreateManyCategoryInput | Prisma.TransactionCreateManyCategoryInput[];
};
export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutCategoryInput, Prisma.TransactionUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutCategoryInput, Prisma.TransactionUncheckedCreateWithoutCategoryInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutCategoryInput, Prisma.TransactionUncheckedUpdateWithoutCategoryInput>;
};
export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutCategoryInput>;
};
export type TransactionCreateManyUserInput = {
    id?: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    categoryId?: number | null;
    fromAccountId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUpdateWithoutUserInput = {
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    account?: Prisma.AccountUpdateOneWithoutAccountTransactionsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutTransactionsNestedInput;
    fromAccount?: Prisma.AccountUpdateOneWithoutFromAccountTransactionsNestedInput;
    toAccount?: Prisma.AccountUpdateOneWithoutToAccountTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateManyAccountInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    categoryId?: number | null;
    fromAccountId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateManyFromAccountInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    categoryId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateManyToAccountInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    categoryId?: number | null;
    fromAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUpdateWithoutAccountInput = {
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutTransactionsNestedInput;
    fromAccount?: Prisma.AccountUpdateOneWithoutFromAccountTransactionsNestedInput;
    toAccount?: Prisma.AccountUpdateOneWithoutToAccountTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutAccountInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUpdateWithoutFromAccountInput = {
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput;
    account?: Prisma.AccountUpdateOneWithoutAccountTransactionsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutTransactionsNestedInput;
    toAccount?: Prisma.AccountUpdateOneWithoutToAccountTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutFromAccountInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUncheckedUpdateManyWithoutFromAccountInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUpdateWithoutToAccountInput = {
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput;
    account?: Prisma.AccountUpdateOneWithoutAccountTransactionsNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutTransactionsNestedInput;
    fromAccount?: Prisma.AccountUpdateOneWithoutFromAccountTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutToAccountInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUncheckedUpdateManyWithoutToAccountInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionCreateManyCategoryInput = {
    id?: number;
    userId: number;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    occurredAtUtc: Date | string;
    createdAtUtc?: Date | string;
    updatedAtUtc?: Date | string;
    accountId?: number | null;
    fromAccountId?: number | null;
    toAccountId?: number | null;
    amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUpdateWithoutCategoryInput = {
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput;
    account?: Prisma.AccountUpdateOneWithoutAccountTransactionsNestedInput;
    fromAccount?: Prisma.AccountUpdateOneWithoutFromAccountTransactionsNestedInput;
    toAccount?: Prisma.AccountUpdateOneWithoutToAccountTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    occurredAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAtUtc?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fromAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    toAccountId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountFrom?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amountTo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type TransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    status?: boolean;
    occurredAtUtc?: boolean;
    createdAtUtc?: boolean;
    updatedAtUtc?: boolean;
    accountId?: boolean;
    categoryId?: boolean;
    fromAccountId?: boolean;
    toAccountId?: boolean;
    amount?: boolean;
    amountFrom?: boolean;
    amountTo?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.Transaction$accountArgs<ExtArgs>;
    category?: boolean | Prisma.Transaction$categoryArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.Transaction$fromAccountArgs<ExtArgs>;
    toAccount?: boolean | Prisma.Transaction$toAccountArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    status?: boolean;
    occurredAtUtc?: boolean;
    createdAtUtc?: boolean;
    updatedAtUtc?: boolean;
    accountId?: boolean;
    categoryId?: boolean;
    fromAccountId?: boolean;
    toAccountId?: boolean;
    amount?: boolean;
    amountFrom?: boolean;
    amountTo?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.Transaction$accountArgs<ExtArgs>;
    category?: boolean | Prisma.Transaction$categoryArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.Transaction$fromAccountArgs<ExtArgs>;
    toAccount?: boolean | Prisma.Transaction$toAccountArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    status?: boolean;
    occurredAtUtc?: boolean;
    createdAtUtc?: boolean;
    updatedAtUtc?: boolean;
    accountId?: boolean;
    categoryId?: boolean;
    fromAccountId?: boolean;
    toAccountId?: boolean;
    amount?: boolean;
    amountFrom?: boolean;
    amountTo?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.Transaction$accountArgs<ExtArgs>;
    category?: boolean | Prisma.Transaction$categoryArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.Transaction$fromAccountArgs<ExtArgs>;
    toAccount?: boolean | Prisma.Transaction$toAccountArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    status?: boolean;
    occurredAtUtc?: boolean;
    createdAtUtc?: boolean;
    updatedAtUtc?: boolean;
    accountId?: boolean;
    categoryId?: boolean;
    fromAccountId?: boolean;
    toAccountId?: boolean;
    amount?: boolean;
    amountFrom?: boolean;
    amountTo?: boolean;
};
export type TransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "type" | "status" | "occurredAtUtc" | "createdAtUtc" | "updatedAtUtc" | "accountId" | "categoryId" | "fromAccountId" | "toAccountId" | "amount" | "amountFrom" | "amountTo", ExtArgs["result"]["transaction"]>;
export type TransactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.Transaction$accountArgs<ExtArgs>;
    category?: boolean | Prisma.Transaction$categoryArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.Transaction$fromAccountArgs<ExtArgs>;
    toAccount?: boolean | Prisma.Transaction$toAccountArgs<ExtArgs>;
};
export type TransactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.Transaction$accountArgs<ExtArgs>;
    category?: boolean | Prisma.Transaction$categoryArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.Transaction$fromAccountArgs<ExtArgs>;
    toAccount?: boolean | Prisma.Transaction$toAccountArgs<ExtArgs>;
};
export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.Transaction$accountArgs<ExtArgs>;
    category?: boolean | Prisma.Transaction$categoryArgs<ExtArgs>;
    fromAccount?: boolean | Prisma.Transaction$fromAccountArgs<ExtArgs>;
    toAccount?: boolean | Prisma.Transaction$toAccountArgs<ExtArgs>;
};
export type $TransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transaction";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        account: Prisma.$AccountPayload<ExtArgs> | null;
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        fromAccount: Prisma.$AccountPayload<ExtArgs> | null;
        toAccount: Prisma.$AccountPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        type: $Enums.TransactionType;
        status: $Enums.TransactionStatus;
        occurredAtUtc: Date;
        createdAtUtc: Date;
        updatedAtUtc: Date;
        accountId: number | null;
        categoryId: number | null;
        fromAccountId: number | null;
        toAccountId: number | null;
        amount: runtime.Decimal | null;
        amountFrom: runtime.Decimal | null;
        amountTo: runtime.Decimal | null;
    }, ExtArgs["result"]["transaction"]>;
    composites: {};
};
export type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransactionPayload, S>;
export type TransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionCountAggregateInputType | true;
};
export interface TransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transaction'];
        meta: {
            name: 'Transaction';
        };
    };
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionFindManyArgs>(args?: Prisma.SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     *
     */
    create<T extends TransactionCreateArgs>(args: Prisma.SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     *
     */
    delete<T extends TransactionDeleteArgs>(args: Prisma.SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionUpdateArgs>(args: Prisma.SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: Prisma.SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(args?: Prisma.Subset<T, TransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Prisma.Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;
    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends TransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: TransactionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Transaction model
     */
    readonly fields: TransactionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Transaction.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    account<T extends Prisma.Transaction$accountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transaction$accountArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.Transaction$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transaction$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    fromAccount<T extends Prisma.Transaction$fromAccountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transaction$fromAccountArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    toAccount<T extends Prisma.Transaction$toAccountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transaction$toAccountArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Transaction model
 */
export interface TransactionFieldRefs {
    readonly id: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly userId: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly type: Prisma.FieldRef<"Transaction", 'TransactionType'>;
    readonly status: Prisma.FieldRef<"Transaction", 'TransactionStatus'>;
    readonly occurredAtUtc: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly createdAtUtc: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly updatedAtUtc: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly accountId: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly fromAccountId: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly toAccountId: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly amount: Prisma.FieldRef<"Transaction", 'Decimal'>;
    readonly amountFrom: Prisma.FieldRef<"Transaction", 'Decimal'>;
    readonly amountTo: Prisma.FieldRef<"Transaction", 'Decimal'>;
}
/**
 * Transaction findUnique
 */
export type TransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: Prisma.TransactionWhereUniqueInput;
};
/**
 * Transaction findUniqueOrThrow
 */
export type TransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: Prisma.TransactionWhereUniqueInput;
};
/**
 * Transaction findFirst
 */
export type TransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: Prisma.TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * Transaction findFirstOrThrow
 */
export type TransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: Prisma.TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * Transaction findMany
 */
export type TransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transactions to fetch.
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Transactions.
     */
    cursor?: Prisma.TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * Transaction create
 */
export type TransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Transaction.
     */
    data: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
};
/**
 * Transaction createMany
 */
export type TransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
};
/**
 * Transaction createManyAndReturn
 */
export type TransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * The data used to create many Transactions.
     */
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Transaction update
 */
export type TransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Transaction.
     */
    data: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
    /**
     * Choose, which Transaction to update.
     */
    where: Prisma.TransactionWhereUniqueInput;
};
/**
 * Transaction updateMany
 */
export type TransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    /**
     * Filter which Transactions to update
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
};
/**
 * Transaction updateManyAndReturn
 */
export type TransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * The data used to update Transactions.
     */
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    /**
     * Filter which Transactions to update
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Transaction upsert
 */
export type TransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: Prisma.TransactionWhereUniqueInput;
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
};
/**
 * Transaction delete
 */
export type TransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    /**
     * Filter which Transaction to delete.
     */
    where: Prisma.TransactionWhereUniqueInput;
};
/**
 * Transaction deleteMany
 */
export type TransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: Prisma.TransactionWhereInput;
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number;
};
/**
 * Transaction.account
 */
export type Transaction$accountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: Prisma.AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
};
/**
 * Transaction.category
 */
export type Transaction$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: Prisma.CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
/**
 * Transaction.fromAccount
 */
export type Transaction$fromAccountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: Prisma.AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
};
/**
 * Transaction.toAccount
 */
export type Transaction$toAccountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: Prisma.AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
};
/**
 * Transaction without action
 */
export type TransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
};
export {};
