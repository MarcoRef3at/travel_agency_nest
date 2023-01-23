import type { Sequelize, Model } from 'sequelize'
import { Purchase } from './Purchase'
import { Transaction } from './Transaction'
import { Sale } from './Sale'
import { Hotel } from './Hotel'
import { Guest } from './Guest'
import { Agency } from './Agency'

export {
  Purchase,
  Transaction,
  Sale,
  Hotel,
  Guest,
  Agency
}

export function initModels(sequelize: Sequelize) {
  Agency.initModel(sequelize)
  Hotel.initModel(sequelize)
  Guest.initModel(sequelize)
  Sale.initModel(sequelize)
  Transaction.initModel(sequelize)
  Purchase.initModel(sequelize)

  Purchase.belongsTo(Hotel, {
    as: 'hotel',
    foreignKey: 'hotelId'
  })
  Purchase.belongsTo(Agency, {
    as: 'agency',
    foreignKey: 'agencyId'
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
  Transaction.belongsTo(Hotel, {
    as: 'fromHotel',
    foreignKey: 'fromHotelId'
  })
  Transaction.belongsTo(Agency, {
    as: 'fromAgency',
    foreignKey: 'fromAgencyId'
  })
  Transaction.belongsTo(Guest, {
    as: 'fromGuest',
    foreignKey: 'fromGuestId'
  })
  Transaction.belongsTo(Hotel, {
    as: 'toHotel',
    foreignKey: 'toHotelId'
  })
  Transaction.belongsTo(Agency, {
    as: 'toAgency',
    foreignKey: 'toAgencyId'
  })
  Transaction.belongsTo(Guest, {
    as: 'toGuest',
    foreignKey: 'toGuestId'
  })
  Sale.belongsTo(Transaction, {
    as: 'transaction',
    foreignKey: 'transactionId'
  })
  Sale.belongsTo(Agency, {
    as: 'agency',
    foreignKey: 'agencyId'
  })
  Sale.belongsTo(Guest, {
    as: 'guest',
    foreignKey: 'guestId'
  })
  Hotel.hasMany(Purchase, {
    as: 'purchases',
    foreignKey: 'hotelId'
  })
  Guest.hasMany(Sale, {
    as: 'sales',
    foreignKey: 'guestId'
  })
  Agency.hasMany(Purchase, {
    as: 'purchases',
    foreignKey: 'agencyId'
  })
  Agency.hasMany(Sale, {
    as: 'sales',
    foreignKey: 'agencyId'
  })

  return {
    Purchase,
    Transaction,
    Sale,
    Hotel,
    Guest,
    Agency
  }
}