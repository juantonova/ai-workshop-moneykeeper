import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCategoryDto, UpdateCategoryDto, CategoryType } from "./dto/category.dto";

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, dto: CreateCategoryDto) {
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

  async findAll(userId: number, type?: CategoryType) {
    const where: any = { userId };

    if (type) {
      where.type = type;
    }

    return this.prisma.category.findMany({
      where,
      orderBy: [{ type: "asc" }, { name: "asc" }],
    });
  }

  async findOne(userId: number, id: number) {
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

  async update(userId: number, id: number, dto: UpdateCategoryDto) {
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

  private normalizeName(name: string): string {
    return name.trim().toLowerCase();
  }
}
