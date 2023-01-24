import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service'
import { TransactionDto } from './interfaces/transaction.interface';
import { ValidationPipe } from '@nestjs/common';
@Controller('transaction')
export class TransactionController {
     constructor(private transactionService: TransactionService) { }

     @Post()
     async createTransaction(@Body() body: TransactionDto) {
          return await this.transactionService.createTransaction(body)
     }

     @Get()
     async getAllTransactions() {
          return await this.transactionService.getAllTransactions()
     }

     @Get(':id')
     async getOneTransaction(@Param('id') id: string) {
          return await this.transactionService.getOneTransaction(id)
     }

     @Put(':id')
     async UpdateTransaction(@Param('id') id: string, @Body(new ValidationPipe()) body: TransactionDto) {
          return await this.transactionService.UpdateTransaction(id, body)
     }

     @Delete(':id')
     async VoidTransaction(@Param('id') id: string) {
          return await this.transactionService.VoidTransaction(id)
     }
}
