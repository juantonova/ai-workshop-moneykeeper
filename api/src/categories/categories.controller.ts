import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto, UpdateCategoryDto, CategoryType } from "./dto/category.dto";

// TODO: Add auth guard when auth module is implemented
const MOCK_USER_ID = 1;

@Controller("api/v1/categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(MOCK_USER_ID, createCategoryDto);
  }

  @Get()
  async findAll(@Query("type") type?: CategoryType) {
    return this.categoriesService.findAll(MOCK_USER_ID, type);
  }

  @Patch(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(MOCK_USER_ID, id, updateCategoryDto);
  }
}
