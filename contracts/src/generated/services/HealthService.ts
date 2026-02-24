/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HealthResponseDto } from "../models/HealthResponseDto";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class HealthService {
  /**
   * Health check
   * @returns HealthResponseDto Service is healthy
   * @throws ApiError
   */
  public static getHealth(): CancelablePromise<HealthResponseDto> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/health",
    });
  }
}
