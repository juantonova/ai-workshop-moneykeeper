import { IsInt, IsString, IsEnum, IsDateString, Min } from "class-validator";

export enum CategoryType {
  EXPENSE = "EXPENSE",
  INCOME = "INCOME",
}

export class CreateCategoryDto {
  @IsEnum(CategoryType)
  type: CategoryType;

  @IsString()
  name: string;
}

export class UpdateCategoryDto {
  @IsString()
  name: string;
}

export class CategoryDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsInt()
  @Min(1)
  userId: number;

  @IsEnum(CategoryType)
  type: CategoryType;

  @IsString()
  name: string;

  @IsString()
  normalizedName: string;

  @IsDateString()
  createdAtUtc: string;

  @IsDateString()
  updatedAtUtc: string;
}
