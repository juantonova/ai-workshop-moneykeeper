import { CategoriesService } from "./categories.service";
import { CreateCategoryDto, UpdateCategoryDto, CategoryType } from "./dto/category.dto";
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        name: string;
        type: import("../generated/prisma/enums").CategoryType;
        id: number;
        userId: number;
        createdAtUtc: Date;
        updatedAtUtc: Date;
        normalizedName: string;
    }>;
    findAll(type?: CategoryType): Promise<{
        name: string;
        type: import("../generated/prisma/enums").CategoryType;
        id: number;
        userId: number;
        createdAtUtc: Date;
        updatedAtUtc: Date;
        normalizedName: string;
    }[]>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        name: string;
        type: import("../generated/prisma/enums").CategoryType;
        id: number;
        userId: number;
        createdAtUtc: Date;
        updatedAtUtc: Date;
        normalizedName: string;
    }>;
}
