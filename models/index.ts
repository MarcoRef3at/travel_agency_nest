import type { Sequelize, Model } from 'sequelize'
import { Purchase } from './Purchase'
import { Transaction } from './Transaction'
import { Sale } from './Sale'
import { Hotel } from './Hotel'
import { Guest } from './Guest'
import { TraveAgency } from './TraveAgency'

export {
  Purchase,
  Transaction,
  Sale,
  Hotel,
  Guest,
  TraveAgency
}

export function initModels(sequelize: Sequelize) {
  Purchase.initModel(sequelize)
  Transaction.initModel(sequelize)
  Sale.initModel(sequelize)
  Hotel.initModel(sequelize)
  Guest.initModel(sequelize)
  TraveAgency.initModel(sequelize)

  Purchase.belongsTo(Hotel, {
    as: 'hotel',
    foreignKey: 'hotelId'
  })
  Purchase.belongsTo(TraveAgency, {
    as: 'traveAgency',
    foreignKey: 'traveAgencyId'
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
  Transaction.belongsTo(TraveAgency, {
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
  Transaction.belongsTo(TraveAgency, {
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
  Sale.belongsTo(TraveAgency, {
    as: 'traveAgency',
    foreignKey: 'traveAgencyId'
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
  TraveAgency.hasMany(Purchase, {
    as: 'purchases',
    foreignKey: 'traveAgencyId'
  })
  TraveAgency.hasMany(Sale, {
    as: 'sales',
    foreignKey: 'traveAgencyId'
  })

  return {
    Purchase,
    Transaction,
    Sale,
    Hotel,
    Guest,
    TraveAgency
  }
}
