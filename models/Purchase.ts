import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Hotel } from './Hotel'
import type { Transaction } from './Transaction'
import type { TraveAgency } from './TraveAgency'

type PurchaseAssociations = 'hotel' | 'traveAgency' | 'transaction'

export class Purchase extends Model<
  InferAttributes<Purchase, {omit: PurchaseAssociations}>,
  InferCreationAttributes<Purchase, {omit: PurchaseAssociations}>
> {
  declare id: CreationOptional<number>
  declare amount: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Purchase belongsTo Hotel
  declare hotel?: NonAttribute<Hotel>
  declare getHotel: BelongsToGetAssociationMixin<Hotel>
  declare setHotel: BelongsToSetAssociationMixin<Hotel, number>
  declare createHotel: BelongsToCreateAssociationMixin<Hotel>
  
  // Purchase belongsTo TraveAgency
  declare traveAgency?: NonAttribute<TraveAgency>
  declare getTraveAgency: BelongsToGetAssociationMixin<TraveAgency>
  declare setTraveAgency: BelongsToSetAssociationMixin<TraveAgency, number>
  declare createTraveAgency: BelongsToCreateAssociationMixin<TraveAgency>
  
  // Purchase belongsTo Transaction
  declare transaction?: NonAttribute<Transaction>
  declare getTransaction: BelongsToGetAssociationMixin<Transaction>
  declare setTransaction: BelongsToSetAssociationMixin<Transaction, number>
  declare createTransaction: BelongsToCreateAssociationMixin<Transaction>
  
  declare static associations: {
    hotel: Association<Purchase, Hotel>,
    traveAgency: Association<Purchase, TraveAgency>,
    transaction: Association<Purchase, Transaction>
  }

  static initModel(sequelize: Sequelize): typeof Purchase {
    Purchase.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      amount: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize
    })
    
    return Purchase
  }
}
