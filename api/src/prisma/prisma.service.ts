import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "../generated/prisma/client";

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private client: PrismaClient;

  constructor() {
    // Prisma 7.x requires explicit configuration
    this.client = new PrismaClient({} as any);
  }

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }

  // Proxy methods to PrismaClient
  get user() {
    return this.client.user;
  }

  get refreshSession() {
    return this.client.refreshSession;
  }

  get account() {
    return this.client.account;
  }

  get category() {
    return this.client.category;
  }

  get transaction() {
    return this.client.transaction;
  }

  get $transaction() {
    return this.client.$transaction.bind(this.client);
  }

  get $connect() {
    return this.client.$connect.bind(this.client);
  }

  get $disconnect() {
    return this.client.$disconnect.bind(this.client);
  }
}
