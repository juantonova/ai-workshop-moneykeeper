import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import {
  CreateTransactionDto,
  UpdateTransactionDto,
  TransactionDto,
  TransactionQueryDto,
} from "./dto/transaction.dto";
import { Prisma } from "../generated/prisma/client";

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    userId: number,
    dto: CreateTransactionDto,
  ): Promise<TransactionDto> {
    // Validate based on transaction type
    await this.validateCreate(userId, dto);

    // Create transaction
    const data: Prisma.TransactionCreateInput = {
      user: { connect: { id: userId } },
      type: dto.type,
      status: "ACTIVE",
      occurredAtUtc: new Date(dto.occurredAtUtc),
    };

    // Set fields based on type
    if (dto.type === "EXPENSE" || dto.type === "INCOME") {
      if (!dto.accountId || !dto.categoryId || !dto.amount) {
        throw new BadRequestException({
          code: "MISSING_REQUIRED_FIELDS",
          message: `${dto.type} requires accountId, categoryId, and amount`,
        });
      }
      data.account = { connect: { id: dto.accountId } };
      data.category = { connect: { id: dto.categoryId } };
      data.amount = new Prisma.Decimal(dto.amount);
    } else if (dto.type === "TRANSFER") {
      if (
        !dto.fromAccountId ||
        !dto.toAccountId ||
        !dto.amountFrom ||
        !dto.amountTo
      ) {
        throw new BadRequestException({
          code: "MISSING_REQUIRED_FIELDS",
          message: "TRANSFER requires fromAccountId, toAccountId, amountFrom, and amountTo",
        });
      }
      data.fromAccount = { connect: { id: dto.fromAccountId } };
      data.toAccount = { connect: { id: dto.toAccountId } };
      data.amountFrom = new Prisma.Decimal(dto.amountFrom);
      data.amountTo = new Prisma.Decimal(dto.amountTo);
    } else if (dto.type === "OPENING_BALANCE") {
      if (!dto.accountId || !dto.amount) {
        throw new BadRequestException({
          code: "MISSING_REQUIRED_FIELDS",
          message: "OPENING_BALANCE requires accountId and amount",
        });
      }
      data.account = { connect: { id: dto.accountId } };
      data.amount = new Prisma.Decimal(dto.amount);
    }

    const transaction = await this.prisma.transaction.create({
      data,
    });

    return this.mapToDto(transaction);
  }

  async findAll(
    userId: number,
    query: TransactionQueryDto,
  ): Promise<TransactionDto[]> {
    const where: Prisma.TransactionWhereInput = { userId };

    // Type filter
    if (query.type && query.type !== "all") {
      const typeMap: Record<string, any> = {
        expense: "EXPENSE",
        income: "INCOME",
        transfer: "TRANSFER",
        opening: "OPENING_BALANCE",
      };
      where.type = typeMap[query.type] as any;
    }

    // Date range filter
    if (query.date_from || query.date_to) {
      where.occurredAtUtc = {};
      if (query.date_from) {
        where.occurredAtUtc.gte = new Date(query.date_from);
      }
      if (query.date_to) {
        where.occurredAtUtc.lte = new Date(query.date_to);
      }
    }

    // Category filter
    if (query.category_id) {
      where.categoryId = query.category_id;
    }

    const offset = query.offset ?? 0;
    const limit = Math.min(query.limit ?? 50, 200); // max 200

    const transactions = await this.prisma.transaction.findMany({
      where,
      orderBy: { occurredAtUtc: "desc" },
      skip: offset,
      take: limit,
    });

    return transactions.map((t) => this.mapToDto(t));
  }

  async findOne(userId: number, id: number): Promise<TransactionDto> {
    const transaction = await this.prisma.transaction.findFirst({
      where: { id, userId },
    });

    if (!transaction) {
      throw new NotFoundException({
        code: "TRANSACTION_NOT_FOUND",
        message: `Transaction with id ${id} not found`,
      });
    }

    return this.mapToDto(transaction);
  }

  async update(
    userId: number,
    id: number,
    dto: UpdateTransactionDto,
  ): Promise<TransactionDto> {
    const transaction = await this.prisma.transaction.findFirst({
      where: { id, userId },
    });

    if (!transaction) {
      throw new NotFoundException({
        code: "TRANSACTION_NOT_FOUND",
        message: `Transaction with id ${id} not found`,
      });
    }

    // OPENING_BALANCE is immutable
    if (transaction.type === "OPENING_BALANCE") {
      throw new BadRequestException({
        code: "OPENING_BALANCE_IMMUTABLE",
        message: "OPENING_BALANCE transactions cannot be modified",
      });
    }

    // Validate update rules
    await this.validateUpdate(userId, transaction, dto);

    const data: Prisma.TransactionUpdateInput = {};

    // Common fields
    if (dto.occurredAtUtc) {
      data.occurredAtUtc = new Date(dto.occurredAtUtc);
    }

    // Type-specific fields
    if (transaction.type === "TRANSFER") {
      // TRANSFER: can only update amounts and date
      if (dto.amountFrom) {
        data.amountFrom = new Prisma.Decimal(dto.amountFrom);
      }
      if (dto.amountTo) {
        data.amountTo = new Prisma.Decimal(dto.amountTo);
      }

      // Validate that amounts match if same currency
      if (dto.amountFrom && dto.amountTo) {
        const fromAccount = await this.prisma.account.findUnique({
          where: { id: transaction.fromAccountId! },
        });
        const toAccount = await this.prisma.account.findUnique({
          where: { id: transaction.toAccountId! },
        });

        if (
          fromAccount?.currency === toAccount?.currency &&
          dto.amountFrom !== dto.amountTo
        ) {
          throw new BadRequestException({
            code: "SAME_CURRENCY_AMOUNTS_MUST_MATCH",
            message: "Transfer amounts must be equal for same-currency accounts",
          });
        }
      }
    } else {
      // EXPENSE/INCOME: can update amount, category, account
      if (dto.amount !== undefined) {
        data.amount = new Prisma.Decimal(dto.amount);
      }
      if (dto.categoryId) {
        data.category = { connect: { id: dto.categoryId } };
      }
      if (dto.accountId) {
        data.account = { connect: { id: dto.accountId } };
      }
    }

    const updated = await this.prisma.transaction.update({
      where: { id },
      data,
    });

    return this.mapToDto(updated);
  }

  async void(userId: number, id: number): Promise<TransactionDto> {
    const transaction = await this.prisma.transaction.findFirst({
      where: { id, userId },
    });

    if (!transaction) {
      throw new NotFoundException({
        code: "TRANSACTION_NOT_FOUND",
        message: `Transaction with id ${id} not found`,
      });
    }

    // OPENING_BALANCE cannot be voided
    if (transaction.type === "OPENING_BALANCE") {
      throw new BadRequestException({
        code: "CANNOT_VOID_OPENING_BALANCE",
        message: "OPENING_BALANCE transactions cannot be voided",
      });
    }

    // Already voided
    if (transaction.status === "VOID") {
      throw new BadRequestException({
        code: "TRANSACTION_ALREADY_VOID",
        message: "Transaction is already voided",
      });
    }

    const voided = await this.prisma.transaction.update({
      where: { id },
      data: { status: "VOID" },
    });

    return this.mapToDto(voided);
  }

  /**
   * Validate transaction creation rules
   */
  private async validateCreate(
    userId: number,
    dto: CreateTransactionDto,
  ): Promise<void> {
    // Validate EXPENSE/INCOME: only RUB accounts
    if (dto.type === "EXPENSE" || dto.type === "INCOME") {
      if (!dto.accountId) {
        throw new BadRequestException({
          code: "ACCOUNT_REQUIRED",
          message: `${dto.type} requires an account`,
        });
      }

      const account = await this.prisma.account.findFirst({
        where: { id: dto.accountId, userId },
      });

      if (!account) {
        throw new NotFoundException({
          code: "ACCOUNT_NOT_FOUND",
          message: `Account with id ${dto.accountId} not found`,
        });
      }

      if (account.currency !== "RUB") {
        throw new BadRequestException({
          code: "ONLY_RUB_ACCOUNTS_ALLOWED",
          message: "EXPENSE and INCOME transactions can only use RUB accounts",
        });
      }

      // Validate category exists and matches type
      if (!dto.categoryId) {
        throw new BadRequestException({
          code: "CATEGORY_REQUIRED",
          message: `${dto.type} requires a category`,
        });
      }

      const category = await this.prisma.category.findFirst({
        where: { id: dto.categoryId, userId },
      });

      if (!category) {
        throw new NotFoundException({
          code: "CATEGORY_NOT_FOUND",
          message: `Category with id ${dto.categoryId} not found`,
        });
      }

      if (category.type !== dto.type) {
        throw new BadRequestException({
          code: "CATEGORY_TYPE_MISMATCH",
          message: `Category type ${category.type} does not match transaction type ${dto.type}`,
        });
      }
    }

    // Validate TRANSFER
    if (dto.type === "TRANSFER") {
      if (!dto.fromAccountId || !dto.toAccountId) {
        throw new BadRequestException({
          code: "ACCOUNTS_REQUIRED",
          message: "TRANSFER requires fromAccountId and toAccountId",
        });
      }

      if (dto.fromAccountId === dto.toAccountId) {
        throw new BadRequestException({
          code: "SAME_ACCOUNT_TRANSFER",
          message: "Cannot transfer to the same account",
        });
      }

      const fromAccount = await this.prisma.account.findFirst({
        where: { id: dto.fromAccountId, userId },
      });

      const toAccount = await this.prisma.account.findFirst({
        where: { id: dto.toAccountId, userId },
      });

      if (!fromAccount) {
        throw new NotFoundException({
          code: "FROM_ACCOUNT_NOT_FOUND",
          message: `From account with id ${dto.fromAccountId} not found`,
        });
      }

      if (!toAccount) {
        throw new NotFoundException({
          code: "TO_ACCOUNT_NOT_FOUND",
          message: `To account with id ${dto.toAccountId} not found`,
        });
      }

      // If same currency, amounts must match
      if (fromAccount.currency === toAccount.currency) {
        if (dto.amountFrom !== dto.amountTo) {
          throw new BadRequestException({
            code: "SAME_CURRENCY_AMOUNTS_MUST_MATCH",
            message: "Transfer amounts must be equal for same-currency accounts",
          });
        }
      }
    }
  }

  /**
   * Validate transaction update rules
   */
  private async validateUpdate(
    userId: number,
    transaction: any,
    dto: UpdateTransactionDto,
  ): Promise<void> {
    // Validate account if changed (for EXPENSE/INCOME)
    if (dto.accountId && transaction.type !== "TRANSFER") {
      const account = await this.prisma.account.findFirst({
        where: { id: dto.accountId, userId },
      });

      if (!account) {
        throw new NotFoundException({
          code: "ACCOUNT_NOT_FOUND",
          message: `Account with id ${dto.accountId} not found`,
        });
      }

      if (account.currency !== "RUB") {
        throw new BadRequestException({
          code: "ONLY_RUB_ACCOUNTS_ALLOWED",
          message: "EXPENSE and INCOME transactions can only use RUB accounts",
        });
      }
    }

    // Validate category if changed
    if (dto.categoryId) {
      const category = await this.prisma.category.findFirst({
        where: { id: dto.categoryId, userId },
      });

      if (!category) {
        throw new NotFoundException({
          code: "CATEGORY_NOT_FOUND",
          message: `Category with id ${dto.categoryId} not found`,
        });
      }

      if (category.type !== transaction.type) {
        throw new BadRequestException({
          code: "CATEGORY_TYPE_MISMATCH",
          message: `Category type ${category.type} does not match transaction type ${transaction.type}`,
        });
      }
    }
  }

  /**
   * Map Prisma model to DTO
   */
  private mapToDto(transaction: any): TransactionDto {
    return {
      id: transaction.id,
      userId: transaction.userId,
      type: transaction.type,
      status: transaction.status,
      occurredAtUtc: transaction.occurredAtUtc.toISOString(),
      createdAtUtc: transaction.createdAtUtc.toISOString(),
      updatedAtUtc: transaction.updatedAtUtc.toISOString(),
      accountId: transaction.accountId,
      categoryId: transaction.categoryId,
      amount: transaction.amount?.toFixed(2) ?? null,
      fromAccountId: transaction.fromAccountId,
      toAccountId: transaction.toAccountId,
      amountFrom: transaction.amountFrom?.toFixed(2) ?? null,
      amountTo: transaction.amountTo?.toFixed(2) ?? null,
    };
  }
}
