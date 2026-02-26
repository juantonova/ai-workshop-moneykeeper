var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "../generated/prisma/client";
let PrismaService = class PrismaService {
    client;
    constructor() {
        // Prisma 7.x requires explicit configuration
        this.client = new PrismaClient({});
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
};
PrismaService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], PrismaService);
export { PrismaService };
