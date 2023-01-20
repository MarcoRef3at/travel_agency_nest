import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { PurchaseService } from './purchase.service'
import { PurchaseDto } from './interfaces/purchase.interface';
import { ValidationPipe } from '@nestjs/common';

@Controller('purchase')
export class PurchaseController {
     constructor(private purchaseService: PurchaseService) { }

     @Post()
     @UsePipes(new ValidationPipe())
     async createPurchase(@Body() body: PurchaseDto) {
          return await this.purchaseService.createPurchase(body)
     }

     @Get()
     getAllPurchases() {
          return 'getAllPurchases'
     }
}