var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsInt, IsString, IsEnum, IsDateString, Min } from "class-validator";
export var CategoryType;
(function (CategoryType) {
    CategoryType["EXPENSE"] = "EXPENSE";
    CategoryType["INCOME"] = "INCOME";
})(CategoryType || (CategoryType = {}));
export class CreateCategoryDto {
    type;
    name;
}
__decorate([
    IsEnum(CategoryType),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "type", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);
export class UpdateCategoryDto {
    name;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "name", void 0);
export class CategoryDto {
    id;
    userId;
    type;
    name;
    normalizedName;
    createdAtUtc;
    updatedAtUtc;
}
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], CategoryDto.prototype, "id", void 0);
__decorate([
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], CategoryDto.prototype, "userId", void 0);
__decorate([
    IsEnum(CategoryType),
    __metadata("design:type", String)
], CategoryDto.prototype, "type", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CategoryDto.prototype, "name", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], CategoryDto.prototype, "normalizedName", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CategoryDto.prototype, "createdAtUtc", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CategoryDto.prototype, "updatedAtUtc", void 0);
