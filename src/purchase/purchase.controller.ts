import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service'
import { PurchaseDto } from './interfaces/purchase.interface';
import { ValidationPipe } from '@nestjs/common';

@Controller('purchase')
export class PurchaseController {
     constructor(private purchaseService: PurchaseService) { }

     @Post()
     async createPurchase(@Body() body: PurchaseDto) {
          return await this.purchaseService.createPurchase(body)
     }

     @Get()
     getAllPurchases() {
          return 'getAllPurchases'
     }

     @Get(':id')
     getOnePurchase(@Param('id') id: string) {
          return `Retrieving Purchase ${id}`
     }

     @Put(':id')
     UpdatePurchase(@Param('id') id: string) {
          return 'UpdatePurchase'
     }

     @Delete(':id')
     VoidPurchase(@Param('id') id: string) {
          return 'UpdatePurchase'
     }
}