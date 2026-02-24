import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HealthService {
    /**
     * Health check
     * @returns HealthResponseDto Service is healthy
     * @throws ApiError
     */
    static getHealth() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
        });
    }
}
