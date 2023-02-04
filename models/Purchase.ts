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
import type { Account } from './Account'
import type { Transaction } from './Transaction'

export type PurchaseAssociations = 'account' | 'transaction'

export class Purchase extends Model<
  InferAttributes<Purchase, { omit: PurchaseAssociations }>,
  InferCreationAttributes<Purchase, { omit: PurchaseAssociations }>
> {
  declare id: CreationOptional<number>
  declare amount: number | null
  declare status: string | null
  declare account_id: number
  declare transaction_id: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Purchase belongsTo Account
  declare account?: NonAttribute<Account>
  declare getAccount: BelongsToGetAssociationMixin<Account>
  declare setAccount: BelongsToSetAssociationMixin<Account, number>
  declare createAccount: BelongsToCreateAssociationMixin<Account>

  // Purchase belongsTo Transaction
  declare transaction?: NonAttribute<Transaction>
  declare getTransaction: BelongsToGetAssociationMixin<Transaction>
  declare setTransaction: BelongsToSetAssociationMixin<Transaction, number>
  declare createTransaction: BelongsToCreateAssociationMixin<Transaction>

  declare static associations: {
    account: Association<Purchase, Account>,
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
      amount: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.STRING
      },
      account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',
          key: 'id'
        }
      },
      transaction_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'transactions',
          key: 'id'
        }
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
