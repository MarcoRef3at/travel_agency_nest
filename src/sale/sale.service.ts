import { BadRequestException, Injectable } from '@nestjs/common';
import { Transaction } from 'models';
import db from '../../models/db';
@Injectable()
export class SaleService {
  private db;
  constructor() {
    this.db = db.sequelize.models;
  }

  async createSale(data) {
    try {
      // TODO: prevent creating purchase if account id = 1 (current user's account)
      // TODO Prevent creating purchase if account type is hotel
      let transaction = await Transaction.create({
        amount: data.amount,
        status: 'due',
        fromId: data.account_id,
        toId: 1, //TODO: change to generic
      });
      return await this.db.Sale.create(data);
    } catch (error) {
      console.log('createSale error:', error);
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async getAllSales() {
    try {
      return await this.db.Sale.findAll({
        attributes: {
          exclude: ['accountId', 'updatedAt'],
        },
        include: [
          {
            model: this.db.Account,
            as: 'account',
            include: [
              {
                model: this.db.Guest,
                as: 'guest',
                attributes: ['id', 'name'],
              },
              {
                model: this.db.Agency,
                as: 'agency',
                attributes: ['id', 'name'],
              },
            ],
          },
        ],
      });
    } catch (error) {
      console.log('getAllSales error:', error);
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async getOneSale(id: string) {
    try {
      return await this.db.Sale.findByPk(id, {
        attributes: {
          exclude: ['accountId', 'updatedAt'],
        },
        include: [
          {
            model: this.db.Account,
            as: 'account',
            include: [
              {
                model: this.db.Guest,
                as: 'guest',
                attributes: ['id', 'name'],
              },
              {
                model: this.db.Agency,
                as: 'agency',
                attributes: ['id', 'name'],
              },
            ],
          },
        ],
      });
    } catch (error) {
      console.log('getOneSale error:', error);
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async UpdateSale(id: string, data) {
    try {
      return await this.db.Sale.update(data, { where: { id } });
    } catch (error) {
      console.log('UpdateSale error:', error);
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }

  async VoidSale(id: string) {
    try {
      // TODO: void sale not delete it
      return await this.db.Sale.destroy({ where: { id } });
    } catch (error) {
      console.log('VoidSale error:', error);
      throw new BadRequestException('Something wrong happened', {
        description: error.message,
      });
    }
  }
}
