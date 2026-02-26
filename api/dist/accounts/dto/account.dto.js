var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsInt, IsString, IsEnum, IsBoolean, IsDateString, Min } from "class-validator";
export var AccountCurrency;
(function (AccountCurrency) {
    AccountCurrency["RUB"] = "RUB";
    AccountCurrency["USD"] = "USD";
    AccountCurrency["EUR"] = "EUR";
    AccountCurrency["KGS"] = "KGS";
})(AccountCurrency || (AccountCurrency = {}));
export var AccountType;
(function (AccountType) {
    AccountType["CASH"] = "CASH";
    AccountType["INVESTMENT"] = "INVESTMENT";
})(AccountType || (AccountType = {}));
export class CreateAccountDto {
    name;
    currency;
    type;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "name", void 0);
__decorate([
    IsEnum(AccountCurrency),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "currency", void 0);
__decorate([
    IsEnum(AccountType),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "type", void 0);
export class UpdateAccountDto {
    name;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "name", void 0);
export class AccountDto {
    id;
    userId;
    name;
    currency;
    type;
    archived;
    createdAtUtc;
    updatedAtUtc;
}
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], AccountDto.prototype, "id", void 0);
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], AccountDto.prototype, "userId", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], AccountDto.prototype, "name", void 0);
__decorate([
    IsEnum(AccountCurrency),
    __metadata("design:type", String)
], AccountDto.prototype, "currency", void 0);
__decorate([
    IsEnum(AccountType),
    __metadata("design:type", String)
], AccountDto.prototype, "type", void 0);
__decorate([
    IsBoolean(),
    __metadata("design:type", Boolean)
], AccountDto.prototype, "archived", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], AccountDto.prototype, "createdAtUtc", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], AccountDto.prototype, "updatedAtUtc", void 0);
export class BalanceDto {
    accountId;
    accountName;
    currency;
    balance;
}
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], BalanceDto.prototype, "accountId", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], BalanceDto.prototype, "accountName", void 0);
__decorate([
    IsEnum(AccountCurrency),
    __metadata("design:type", String)
], BalanceDto.prototype, "currency", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], BalanceDto.prototype, "balance", void 0);
