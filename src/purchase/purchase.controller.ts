import { Controller, Get, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service'

@Controller('purchase')
export class PurchaseController {
     constructor(private purchaseService: PurchaseService) { }

     @Post()
     async createPurchase() {
          return await this.purchaseService.createPurchase()
     }

     @Get()
     getAllPurchases() {
          return 'getAllPurchases'
     }
}
