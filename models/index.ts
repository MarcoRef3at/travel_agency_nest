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

  Purchase.belongsTo(Transaction, {
    as: 'transaction',
    foreignKey: 'transaction_id'
  })
  Transaction.hasOne(Purchase, {
    as: 'purchase',
    foreignKey: 'transaction_id'
  })
  Transaction.hasOne(Sale, {
    as: 'sale',
    foreignKey: 'transaction_id'
  })
  Transaction.belongsTo(Hotel, {
    as: 'toHotel',
    foreignKey: 'to_hotel_id'
  })
  Transaction.belongsTo(Guest, {
    as: 'fromGuest',
    foreignKey: 'from_guest_id'
  })
  Transaction.belongsTo(Guest, {
    as: 'toGuest',
    foreignKey: 'to_guest_id'
  })
  Transaction.belongsTo(TraveAgency, {
    as: 'fromTravelAgency',
    foreignKey: 'from_travel_agency_id'
  })
  Transaction.belongsTo(TraveAgency, {
    as: 'toTravelAgency',
    foreignKey: 'to_travel_agency_id'
  })
  Sale.belongsTo(Transaction, {
    as: 'transaction',
    foreignKey: 'transaction_id'
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
