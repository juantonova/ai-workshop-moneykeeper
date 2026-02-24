import type { CreateTransactionRequestDto } from '../models/CreateTransactionRequestDto';
import type { TransactionDto } from '../models/TransactionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TransactionsService {
    /**
     * Create transaction
     * @param requestBody
     * @returns TransactionDto Transaction created
     * @throws ApiError
     */
    static createTransaction(requestBody: CreateTransactionRequestDto): CancelablePromise<TransactionDto>;
}
