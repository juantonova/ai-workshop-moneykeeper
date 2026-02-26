import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { CreateAccountDto, UpdateAccountDto } from "./dto/account.dto";

// TODO: Add auth guard when auth module is implemented
const MOCK_USER_ID = 1;

@Controller("api/v1/accounts")
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(MOCK_USER_ID, createAccountDto);
  }

  @Get()
  async findAll() {
    return this.accountsService.findAll(MOCK_USER_ID);
  }

  @Get("balances")
  async getBalances() {
    return this.accountsService.getBalances(MOCK_USER_ID);
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(MOCK_USER_ID, id, updateAccountDto);
  }

  @Post(":id/archive")
  @HttpCode(HttpStatus.OK)
  async archive(@Param("id", ParseIntPipe) id: number) {
    return this.accountsService.archive(MOCK_USER_ID, id);
  }
}
