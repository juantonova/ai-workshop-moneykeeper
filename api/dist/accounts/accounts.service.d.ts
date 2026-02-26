import { PrismaService } from "../prisma/prisma.service";
import { CreateAccountDto, UpdateAccountDto, BalanceDto } from "./dto/account.dto";
export declare class AccountsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: number, dto: CreateAccountDto): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }>;
    findAll(userId: number): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }[]>;
    findOne(userId: number, id: number): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }>;
    update(userId: number, id: number, dto: UpdateAccountDto): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }>;
    archive(userId: number, id: number): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }>;
    getBalances(userId: number): Promise<BalanceDto[]>;
    private calculateBalance;
}
