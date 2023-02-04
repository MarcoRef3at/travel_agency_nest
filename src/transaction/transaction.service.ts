import { BadRequestException, Injectable } from '@nestjs/common';
import db from '../../models/db'

@Injectable()
export class TransactionService {
     private db;
     constructor() {
          this.db = db.sequelize.models;
     }

     // TODO: add validation
     // TODO: add logic
     async createTransaction(data) {
          try {
               return await this.db.Transaction.create(data)
          } catch (error) {
               console.log('createTransaction error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async getAllTransactions() {
          try {
               return await this.db.Transaction.findAll()
          } catch (error) {
               console.log('getAllTransactions error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async getOneTransaction(id: string) {

          try {
               return await this.db.Transaction.findByPk(id)
          } catch (error) {
               console.log('getOneTransaction error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async UpdateTransaction(id: string, data) {
          try {
               return await this.db.Transaction.update(data, { where: { id } })
          } catch (error) {
               console.log('UpdateTransaction error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

     async VoidTransaction(id: string) {
          try {
               // TODO: void purchase not delete it
               return await this.db.Transaction.destroy({ where: { id } })
          } catch (error) {
               console.log('error:', error)
               throw new BadRequestException('Something wrong happened', { description: error.message })
          }
     }

}
