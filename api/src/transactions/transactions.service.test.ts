import { describe, it, beforeEach, mock } from "node:test";
import assert from "node:assert";
import { TransactionsService } from "./transactions.service";
import { BadRequestException } from "@nestjs/common";

describe("TransactionsService - Business Rules Validation", () => {
  const mockPrismaService = {
    transaction: {
      create: mock.fn(),
      findMany: mock.fn(),
      findFirst: mock.fn(),
      update: mock.fn(),
    },
    account: {
      findFirst: mock.fn(),
      findUnique: mock.fn(),
    },
    category: {
      findFirst: mock.fn(),
    },
  };

  let service: TransactionsService;

  beforeEach(() => {
    service = new TransactionsService(mockPrismaService as any);
    mockPrismaService.transaction.create.mock.resetCalls();
    mockPrismaService.transaction.findMany.mock.resetCalls();
    mockPrismaService.transaction.findFirst.mock.resetCalls();
    mockPrismaService.transaction.update.mock.resetCalls();
    mockPrismaService.account.findFirst.mock.resetCalls();
    mockPrismaService.account.findUnique.mock.resetCalls();
    mockPrismaService.category.findFirst.mock.resetCalls();
  });

  describe("EXPENSE/INCOME validation", () => {
    it("should reject EXPENSE with non-RUB account", async () => {
      const dto: any = {
        type: "EXPENSE",
        occurredAtUtc: "2026-02-26T10:00:00Z",
        accountId: 1,
        categoryId: 1,
        amount: 100,
      };

      mockPrismaService.account.findFirst.mock.mockImplementation(
        () => Promise.resolve({
          id: 1,
          userId: 1,
          currency: "USD",
          type: "CASH",
        }) as any
      );

      await assert.rejects(
        async () => await service.create(1, dto),
        (err: any) => {
          return err instanceof BadRequestException && 
                 (err as any).response.code === "ONLY_RUB_ACCOUNTS_ALLOWED";
        },
      );
    });
  });

  describe("TRANSFER validation", () => {
    it("should reject TRANSFER to same account", async () => {
      const dto: any = {
        type: "TRANSFER",
        occurredAtUtc: "2026-02-26T10:00:00Z",
        fromAccountId: 1,
        toAccountId: 1,
        amountFrom: 100,
        amountTo: 100,
      };

      await assert.rejects(
        async () => await service.create(1, dto),
        (err: any) => {
          return err instanceof BadRequestException && 
                 (err as any).response.code === "SAME_ACCOUNT_TRANSFER";
        },
      );
    });
  });

  describe("Update/Void validation", () => {
    it("should reject updating OPENING_BALANCE", async () => {
      mockPrismaService.transaction.findFirst.mock.mockImplementation(
        () => Promise.resolve({
          id: 1,
          userId: 1,
          type: "OPENING_BALANCE",
          status: "ACTIVE",
        }) as any
      );

      await assert.rejects(
        async () => await service.update(1, 1, { amount: 200 }),
        (err: any) => {
          return err instanceof BadRequestException && 
                 (err as any).response.code === "OPENING_BALANCE_IMMUTABLE";
        },
      );
    });

    it("should reject voiding OPENING_BALANCE", async () => {
      mockPrismaService.transaction.findFirst.mock.mockImplementation(
        () => Promise.resolve({
          id: 1,
          userId: 1,
          type: "OPENING_BALANCE",
          status: "ACTIVE",
        }) as any
      );

      await assert.rejects(
        async () => await service.void(1, 1),
        (err: any) => {
          return err instanceof BadRequestException && 
                 (err as any).response.code === "CANNOT_VOID_OPENING_BALANCE";
        },
      );
    });
  });
});
