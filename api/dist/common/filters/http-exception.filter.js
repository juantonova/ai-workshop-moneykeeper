var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Catch, HttpException, HttpStatus } from "@nestjs/common";
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let errorResponse = {
            code: "INTERNAL_SERVER_ERROR",
            message: "An unexpected error occurred",
        };
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            if (typeof exceptionResponse === "string") {
                errorResponse = {
                    code: this.getErrorCode(status),
                    message: exceptionResponse,
                };
            }
            else if (typeof exceptionResponse === "object") {
                const resp = exceptionResponse;
                errorResponse = {
                    code: resp.code || this.getErrorCode(status),
                    message: resp.message || exception.message,
                    details: resp.details || (resp.error ? { error: resp.error } : undefined),
                };
            }
        }
        else if (exception instanceof Error) {
            errorResponse = {
                code: "INTERNAL_SERVER_ERROR",
                message: exception.message,
            };
        }
        response.status(status).json(errorResponse);
    }
    getErrorCode(status) {
        switch (status) {
            case HttpStatus.BAD_REQUEST:
                return "VALIDATION_ERROR";
            case HttpStatus.UNAUTHORIZED:
                return "UNAUTHORIZED";
            case HttpStatus.FORBIDDEN:
                return "FORBIDDEN";
            case HttpStatus.NOT_FOUND:
                return "NOT_FOUND";
            case HttpStatus.CONFLICT:
                return "CONFLICT";
            default:
                return "INTERNAL_SERVER_ERROR";
        }
    }
};
HttpExceptionFilter = __decorate([
    Catch()
], HttpExceptionFilter);
export { HttpExceptionFilter };
