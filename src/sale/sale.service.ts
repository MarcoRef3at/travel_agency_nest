import { BadRequestException, Injectable } from '@nestjs/common';
import db from './../../models/db'
@Injectable()
export class SaleService {
     private db;
     constructor() {
          this.db = db.sequelize.models;
     }

     async createSale(data) {
          try {
               return await this.db.Sale.create(data)
          } catch (error) {
               console.log('createSale error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async getAllSales() {
          try {
               return await this.db.Sale.findAll()
          } catch (error) {
               console.log('getAllSales error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async getOneSale(id: string) {
          try {
               return await this.db.Sale.findByPk(id)
          } catch (error) {
               console.log('getOneSale error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async UpdateSale(id: string, data) {
          try {
               return await this.db.Sale.update(data, { where: { id } })
          } catch (error) {
               console.log('UpdateSale error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async VoidSale(id: string) {
          try {
               // TODO: void sale not delete it
               return await this.db.Sale.destroy({ where: { id } })
          } catch (error) {
               console.log('VoidSale error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

}
