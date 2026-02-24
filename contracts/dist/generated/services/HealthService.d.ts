import type { HealthResponseDto } from "../models/HealthResponseDto";
import type { CancelablePromise } from "../core/CancelablePromise";
export declare class HealthService {
    /**
     * Health check
     * @returns HealthResponseDto Service is healthy
     * @throws ApiError
     */
    static getHealth(): CancelablePromise<HealthResponseDto>;
}
