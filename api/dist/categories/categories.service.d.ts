import { PrismaService } from "../prisma/prisma.service";
import { CreateCategoryDto, UpdateCategoryDto, CategoryType } from "./dto/category.dto";
export declare class CategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: number, dto: CreateCategoryDto): Promise<{
        name: string;
        type: import("../generated/prisma/enums").CategoryType;
        id: number;
        userId: number;
        createdAtUtc: Date;
        updatedAtUtc: Date;
        normalizedName: string;
    }>;
    findAll(userId: number, type?: CategoryType): Promise<{
        name: string;
        type: import("../generated/prisma/enums").CategoryType;
        id: number;
        userId: number;
        createdAtUtc: Date;
        updatedAtUtc: Date;
        normalizedName: string;
    }[]>;
    findOne(userId: number, id: number): Promise<{
        name: string;
        type: import("../generated/prisma/enums").CategoryType;
        id: number;
        userId: number;
        createdAtUtc: Date;
        updatedAtUtc: Date;
        normalizedName: string;
    }>;
    update(userId: number, id: number, dto: UpdateCategoryDto): Promise<{
        name: string;
        type: import("../generated/prisma/enums").CategoryType;
        id: number;
        userId: number;
        createdAtUtc: Date;
        updatedAtUtc: Date;
        normalizedName: string;
    }>;
    private normalizeName;
}
