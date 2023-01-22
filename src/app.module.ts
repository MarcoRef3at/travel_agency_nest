// import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, }), TransactionModule, PurchaseModule, SaleModule],

})
export class AppModule { }