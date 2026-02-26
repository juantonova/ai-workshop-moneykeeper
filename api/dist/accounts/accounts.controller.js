var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe, HttpCode, HttpStatus, } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { CreateAccountDto, UpdateAccountDto } from "./dto/account.dto";
// TODO: Add auth guard when auth module is implemented
const MOCK_USER_ID = 1;
let AccountsController = class AccountsController {
    accountsService;
    constructor(accountsService) {
        this.accountsService = accountsService;
    }
    async create(createAccountDto) {
        return this.accountsService.create(MOCK_USER_ID, createAccountDto);
    }
    async findAll() {
        return this.accountsService.findAll(MOCK_USER_ID);
    }
    async getBalances() {
        return this.accountsService.getBalances(MOCK_USER_ID);
    }
    async update(id, updateAccountDto) {
        return this.accountsService.update(MOCK_USER_ID, id, updateAccountDto);
    }
    async archive(id) {
        return this.accountsService.archive(MOCK_USER_ID, id);
    }
};
__decorate([
    Post(),
    HttpCode(HttpStatus.CREATED),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "findAll", null);
__decorate([
    Get("balances"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getBalances", null);
__decorate([
    Patch(":id"),
    __param(0, Param("id", ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "update", null);
__decorate([
    Post(":id/archive"),
    HttpCode(HttpStatus.OK),
    __param(0, Param("id", ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "archive", null);
AccountsController = __decorate([
    Controller("api/v1/accounts"),
    __metadata("design:paramtypes", [AccountsService])
], AccountsController);
export { AccountsController };
