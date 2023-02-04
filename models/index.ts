import type { Sequelize, Model } from 'sequelize'
import { Purchase } from './Purchase'
import { Transaction } from './Transaction'
import { Sale } from './Sale'
import { Hotel } from './Hotel'
import { Guest } from './Guest'
import { Agency } from './Agency'
import { Account } from './Account'

export {
  Purchase,
  Transaction,
  Sale,
  Hotel,
  Guest,
  Agency,
  Account
}

export function initModels(sequelize: Sequelize) {
  Account.initModel(sequelize)
  Purchase.initModel(sequelize)
  Transaction.initModel(sequelize)
  Sale.initModel(sequelize)
  Hotel.initModel(sequelize)
  Guest.initModel(sequelize)
  Agency.initModel(sequelize)

  Purchase.belongsTo(Account, {
    as: 'account',
    foreignKey: 'accountId'
  })
  Purchase.belongsTo(Transaction, {
    as: 'transaction',
    foreignKey: 'transactionId'
  })
  Transaction.hasMany(Purchase, {
    as: 'purchases',
    foreignKey: 'transactionId'
  })
  Transaction.hasMany(Sale, {
    as: 'sales',
    foreignKey: 'transactionId'
  })
  Transaction.belongsTo(Account, {
    as: 'from',
    foreignKey: 'fromId'
  })
  Transaction.belongsTo(Account, {
    as: 'to',
    foreignKey: 'toId'
  })
  Sale.belongsTo(Transaction, {
    as: 'transaction',
    foreignKey: 'transactionId'
  })
  Sale.belongsTo(Account, {
    as: 'account',
    foreignKey: 'accountId'
  })
  Hotel.belongsTo(Account, {
    as: 'account',
    foreignKey: 'accountId'
  })
  Guest.belongsTo(Account, {
    as: 'account',
    foreignKey: 'accountId'
  })
  Agency.belongsTo(Account, {
    as: 'account',
    foreignKey: 'accountId'
  })
  Account.hasMany(Purchase, {
    as: 'purchases',
    foreignKey: 'accountId'
  })
  Account.hasMany(Sale, {
    as: 'sales',
    foreignKey: 'accountId'
  })
  Account.hasOne(Hotel, {
    as: 'hotel',
    foreignKey: 'accountId'
  })
  Account.hasOne(Guest, {
    as: 'guest',
    foreignKey: 'accountId'
  })
  Account.hasOne(Agency, {
    as: 'agency',
    foreignKey: 'accountId'
  })

  return {
    Purchase,
    Transaction,
    Sale,
    Hotel,
    Guest,
    Agency,
    Account
  }
}
