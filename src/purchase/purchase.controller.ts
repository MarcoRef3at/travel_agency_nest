import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service'
// import { PurchaseDto } from './interfaces/purchase.interface';
import { ValidationPipe } from '@nestjs/common';

@Controller('purchase')
export class PurchaseController {
     constructor(private purchaseService: PurchaseService) { }

     @Post()
     async createPurchase(@Body() body) {
          return await this.purchaseService.createPurchase(body)
     }

     @Get()
     async getAllPurchases() {
          return await this.purchaseService.getAllPurchases()
     }

     @Get(':id')
     async getOnePurchase(@Param('id') id: string) {
          return await this.purchaseService.getOnePurchase(id)
     }

     @Put(':id')
     async UpdatePurchase(@Param('id') id: string, @Body(new ValidationPipe()) body) {
          return await this.purchaseService.UpdatePurchase(id, body)
     }

     @Delete(':id')
     async VoidPurchase(@Param('id') id: string) {
          return await this.purchaseService.VoidPurchase(id)
     }
}