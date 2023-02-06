// import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, }), TransactionModule, PurchaseModule, SaleModule, AdminModule],

})
export class AppModule { }