import { Injectable } from '@nestjs/common';
import db from './../../models/db'
@Injectable()
export class PurchaseService {
     private db;
     constructor() {
          this.db = db.sequelize.models;
     }
     async createPurchase() {
          try {
               return await this.db.Purchase.create({ from_date: '2019-01-02', to_date: '2019-01-03', amount: 1111 })
          } catch (error) {
               console.log('error:', error)
          }
     }
}
