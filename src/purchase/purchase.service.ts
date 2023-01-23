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
          try {
               return await this.db.Purchase.create(data)
          } catch (error) {
               console.log('error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async getAllPurchases() {
          try {
               return await this.db.Purchase.findAll()
          } catch (error) {
               console.log('error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async getOnePurchase(id: string) {
          try {
               return await this.db.Purchase.findByPk(id)
          } catch (error) {
               console.log('error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async UpdatePurchase(id: string, data: PurchaseInterface) {
          try {
               return await this.db.Purchase.update(data, { where: { id } })
          } catch (error) {
               console.log('error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async VoidPurchase(id: string) {
          try {
               // TODO: void purchase not delete it
               return await this.db.Purchase.destroy({ where: { id } })
          } catch (error) {
               console.log('error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }


}
