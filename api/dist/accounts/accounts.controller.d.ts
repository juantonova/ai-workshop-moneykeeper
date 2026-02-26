import { AccountsService } from "./accounts.service";
import { CreateAccountDto, UpdateAccountDto } from "./dto/account.dto";
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    create(createAccountDto: CreateAccountDto): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }>;
    findAll(): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }[]>;
    getBalances(): Promise<import("./dto/account.dto").BalanceDto[]>;
    update(id: number, updateAccountDto: UpdateAccountDto): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }>;
    archive(id: number): Promise<{
        name: string;
        currency: import("../generated/prisma/enums").AccountCurrency;
        type: import("../generated/prisma/enums").AccountType;
        id: number;
        userId: number;
        archived: boolean;
        createdAtUtc: Date;
        updatedAtUtc: Date;
    }>;
}
