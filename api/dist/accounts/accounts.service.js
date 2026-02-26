var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, BadRequestException, ConflictException, } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "../generated/prisma/client";
let AccountsService = class AccountsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        return this.prisma.account.create({
            data: {
                userId,
                name: dto.name,
                currency: dto.currency,
                type: dto.type,
            },
        });
    }
    async findAll(userId) {
        return this.prisma.account.findMany({
            where: { userId },
            orderBy: { createdAtUtc: "asc" },
        });
    }
    async findOne(userId, id) {
        const account = await this.prisma.account.findFirst({
            where: { id, userId },
        });
        if (!account) {
            throw new NotFoundException({
                code: "ACCOUNT_NOT_FOUND",
                message: `Account with id ${id} not found`,
            });
        }
        return account;
    }
    async update(userId, id, dto) {
        await this.findOne(userId, id);
        return this.prisma.account.update({
            where: { id },
            data: { name: dto.name },
        });
    }
    async archive(userId, id) {
        const account = await this.findOne(userId, id);
        if (account.archived) {
            throw new BadRequestException({
                code: "ACCOUNT_ALREADY_ARCHIVED",
                message: "Account is already archived",
            });
        }
        // Calculate balance
        const balance = await this.calculateBalance(userId, id);
        if (balance !== "0.00") {
            throw new ConflictException({
                code: "ACCOUNT_BALANCE_NOT_ZERO",
                message: "Account balance must be zero to archive",
                details: { balance },
            });
        }
        return this.prisma.account.update({
            where: { id },
            data: { archived: true },
        });
    }
    async getBalances(userId) {
        const accounts = await this.prisma.account.findMany({
            where: {
                userId,
                archived: false,
            },
            orderBy: { createdAtUtc: "asc" },
        });
        const balances = [];
        for (const account of accounts) {
            const balance = await this.calculateBalance(userId, account.id);
            balances.push({
                accountId: account.id,
                accountName: account.name,
                currency: account.currency,
                balance,
            });
        }
        return balances;
    }
    async calculateBalance(userId, accountId) {
        // Get all transactions for this account
        const transactions = await this.prisma.transaction.findMany({
            where: {
                userId,
                status: "ACTIVE",
                OR: [{ accountId }, { fromAccountId: accountId }, { toAccountId: accountId }],
            },
        });
        let balance = new Prisma.Decimal(0);
        for (const tx of transactions) {
            switch (tx.type) {
                case "OPENING_BALANCE":
                    if (tx.accountId === accountId && tx.amount) {
                        balance = balance.add(tx.amount);
                    }
                    break;
                case "INCOME":
                    if (tx.accountId === accountId && tx.amount) {
                        balance = balance.add(tx.amount);
                    }
                    break;
                case "EXPENSE":
                    if (tx.accountId === accountId && tx.amount) {
                        balance = balance.sub(tx.amount);
                    }
                    break;
                case "TRANSFER":
                    if (tx.fromAccountId === accountId && tx.amountFrom) {
                        balance = balance.sub(tx.amountFrom);
                    }
                    if (tx.toAccountId === accountId && tx.amountTo) {
                        balance = balance.add(tx.amountTo);
                    }
                    break;
            }
        }
        return balance.toFixed(2);
    }
};
AccountsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AccountsService);
export { AccountsService };
