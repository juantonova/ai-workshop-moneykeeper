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
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const normalizedName = this.normalizeName(dto.name);
        // Check if category already exists
        const existing = await this.prisma.category.findFirst({
            where: {
                userId,
                type: dto.type,
                normalizedName,
            },
        });
        if (existing) {
            throw new ConflictException({
                code: "CATEGORY_ALREADY_EXISTS",
                message: `Category '${dto.name}' already exists`,
            });
        }
        return this.prisma.category.create({
            data: {
                userId,
                type: dto.type,
                name: dto.name,
                normalizedName,
            },
        });
    }
    async findAll(userId, type) {
        const where = { userId };
        if (type) {
            where.type = type;
        }
        return this.prisma.category.findMany({
            where,
            orderBy: [{ type: "asc" }, { name: "asc" }],
        });
    }
    async findOne(userId, id) {
        const category = await this.prisma.category.findFirst({
            where: { id, userId },
        });
        if (!category) {
            throw new NotFoundException({
                code: "CATEGORY_NOT_FOUND",
                message: `Category with id ${id} not found`,
            });
        }
        return category;
    }
    async update(userId, id, dto) {
        const category = await this.findOne(userId, id);
        // Only EXPENSE categories can be renamed
        if (category.type !== "EXPENSE") {
            throw new BadRequestException({
                code: "INCOME_CATEGORY_IMMUTABLE",
                message: "Income categories cannot be renamed",
            });
        }
        const normalizedName = this.normalizeName(dto.name);
        // Check if new name conflicts with existing category
        const existing = await this.prisma.category.findFirst({
            where: {
                userId,
                type: category.type,
                normalizedName,
                id: { not: id },
            },
        });
        if (existing) {
            throw new ConflictException({
                code: "CATEGORY_NAME_CONFLICT",
                message: `Category '${dto.name}' already exists`,
            });
        }
        return this.prisma.category.update({
            where: { id },
            data: {
                name: dto.name,
                normalizedName,
            },
        });
    }
    normalizeName(name) {
        return name.trim().toLowerCase();
    }
};
CategoriesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CategoriesService);
export { CategoriesService };
