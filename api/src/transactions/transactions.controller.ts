import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import {
  CreateTransactionDto,
  UpdateTransactionDto,
  TransactionQueryDto,
} from "./dto/transaction.dto";

@Controller("api/v1/transactions")
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() dto: CreateTransactionDto) {
    // TODO: Get userId from auth context once auth is implemented
    const userId = 1; // Mock userId
    return this.transactionsService.create(userId, dto);
  }

  @Get()
  findAll(@Query() query: TransactionQueryDto) {
    // TODO: Get userId from auth context once auth is implemented
    const userId = 1; // Mock userId
    return this.transactionsService.findAll(userId, query);
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    // TODO: Get userId from auth context once auth is implemented
    const userId = 1; // Mock userId
    return this.transactionsService.findOne(userId, id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateTransactionDto,
  ) {
    // TODO: Get userId from auth context once auth is implemented
    const userId = 1; // Mock userId
    return this.transactionsService.update(userId, id, dto);
  }

  @Post(":id/void")
  void(@Param("id", ParseIntPipe) id: number) {
    // TODO: Get userId from auth context once auth is implemented
    const userId = 1; // Mock userId
    return this.transactionsService.void(userId, id);
  }
}
