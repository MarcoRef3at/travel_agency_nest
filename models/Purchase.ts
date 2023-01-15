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
import type { Transaction } from './Transaction'

type PurchaseAssociations = 'transaction'

export class Purchase extends Model<
  InferAttributes<Purchase, { omit: PurchaseAssociations }>,
  InferCreationAttributes<Purchase, { omit: PurchaseAssociations }>
> {
  declare id: CreationOptional<number>
  declare fromDate: string | null
  declare toDate: string | null
  declare amount: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Purchase belongsTo Transaction
  declare transaction?: NonAttribute<Transaction>
  declare getTransaction: BelongsToGetAssociationMixin<Transaction>
  declare setTransaction: BelongsToSetAssociationMixin<Transaction, number>
  declare createTransaction: BelongsToCreateAssociationMixin<Transaction>

  declare static associations: {
    transaction: Association<Purchase, Transaction>
  }

  static initModel(sequelize: Sequelize): typeof Purchase {
    Purchase.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
      },
      fromDate: {
        type: DataTypes.DATEONLY
      },
      toDate: {
        type: DataTypes.DATEONLY
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
