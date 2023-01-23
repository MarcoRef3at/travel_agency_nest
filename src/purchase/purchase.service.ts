import { BadRequestException, Injectable } from '@nestjs/common';
import db from './../../models/db'
import { PurchaseInterface } from './interfaces/purchase.interface';
@Injectable()
export class PurchaseService {
     private db;
     constructor() {
          this.db = db.sequelize.models;
     }
     async createPurchase(data: PurchaseInterface) {
          console.log('data:', data)
          try {
               return await this.db.Purchase.create(data)
          } catch (error) {
               console.log('error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }
}
