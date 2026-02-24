import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransactionsService {
    /**
     * Create transaction
     * @param requestBody
     * @returns TransactionDto Transaction created
     * @throws ApiError
     */
    static createTransaction(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transactions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
