import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { PrismaModule } from "./prisma/prisma.module";
import { AccountsModule } from "./accounts/accounts.module";
import { CategoriesModule } from "./categories/categories.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { HealthController } from "./health/health.controller";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

@Module({
  imports: [PrismaModule, AccountsModule, CategoriesModule, TransactionsModule],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
