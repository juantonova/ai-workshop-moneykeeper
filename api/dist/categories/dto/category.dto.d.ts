export declare enum CategoryType {
    EXPENSE = "EXPENSE",
    INCOME = "INCOME"
}
export declare class CreateCategoryDto {
    type: CategoryType;
    name: string;
}
export declare class UpdateCategoryDto {
    name: string;
}
export declare class CategoryDto {
    id: number;
    userId: number;
    type: CategoryType;
    name: string;
    normalizedName: string;
    createdAtUtc: string;
    updatedAtUtc: string;
}
