/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTransactionRequestDto } from '../models/CreateTransactionRequestDto';
import type { TransactionDto } from '../models/TransactionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransactionsService {
    /**
     * Create transaction
     * @param requestBody
     * @returns TransactionDto Transaction created
     * @throws ApiError
     */
    public static createTransaction(
        requestBody: CreateTransactionRequestDto,
    ): CancelablePromise<TransactionDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transactions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
