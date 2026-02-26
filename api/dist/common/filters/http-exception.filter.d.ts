import { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
export interface ErrorResponse {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
    private getErrorCode;
}
