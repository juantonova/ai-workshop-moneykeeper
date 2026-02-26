import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAccountDto, UpdateAccountDto, BalanceDto } from "./dto/account.dto";
import { Prisma } from "../generated/prisma/client";

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, dto: CreateAccountDto) {
    return this.prisma.account.create({
      data: {
        userId,
        name: dto.name,
        currency: dto.currency,
        type: dto.type,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.account.findMany({
      where: { userId },
      orderBy: { createdAtUtc: "asc" },
    });
  }

  async findOne(userId: number, id: number) {
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

  async update(userId: number, id: number, dto: UpdateAccountDto) {
    await this.findOne(userId, id);

    return this.prisma.account.update({
      where: { id },
      data: { name: dto.name },
    });
  }

  async archive(userId: number, id: number) {
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

  async getBalances(userId: number): Promise<BalanceDto[]> {
    const accounts = await this.prisma.account.findMany({
      where: {
        userId,
        archived: false,
      },
      orderBy: { createdAtUtc: "asc" },
    });

    const balances: BalanceDto[] = [];

    for (const account of accounts) {
      const balance = await this.calculateBalance(userId, account.id);
      balances.push({
        accountId: account.id,
        accountName: account.name,
        currency: account.currency as any,
        balance,
      });
    }

    return balances;
  }

  private async calculateBalance(userId: number, accountId: number): Promise<string> {
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
}
