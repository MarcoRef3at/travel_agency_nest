import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Agency } from './Agency'
import type { Guest } from './Guest'
import type { Hotel } from './Hotel'
import type { Purchase } from './Purchase'
import type { Sale } from './Sale'

type TransactionAssociations = 'purchases' | 'sales' | 'fromHotel' | 'fromAgency' | 'fromGuest' | 'toHotel' | 'toAgency' | 'toGuest'

export class Transaction extends Model<
  InferAttributes<Transaction, { omit: TransactionAssociations }>,
  InferCreationAttributes<Transaction, { omit: TransactionAssociations }>
> {
  declare id: CreationOptional<number>
  declare amount: number
  declare remaining: number | null
  declare paymentType: 'partial' | 'full' | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Transaction hasMany Purchase
  declare purchases?: NonAttribute<Purchase[]>
  declare getPurchases: HasManyGetAssociationsMixin<Purchase>
  declare setPurchases: HasManySetAssociationsMixin<Purchase, number>
  declare addPurchase: HasManyAddAssociationMixin<Purchase, number>
  declare addPurchases: HasManyAddAssociationsMixin<Purchase, number>
  declare createPurchase: HasManyCreateAssociationMixin<Purchase>
  declare removePurchase: HasManyRemoveAssociationMixin<Purchase, number>
  declare removePurchases: HasManyRemoveAssociationsMixin<Purchase, number>
  declare hasPurchase: HasManyHasAssociationMixin<Purchase, number>
  declare hasPurchases: HasManyHasAssociationsMixin<Purchase, number>
  declare countPurchases: HasManyCountAssociationsMixin

  // Transaction hasMany Sale
  declare sales?: NonAttribute<Sale[]>
  declare getSales: HasManyGetAssociationsMixin<Sale>
  declare setSales: HasManySetAssociationsMixin<Sale, number>
  declare addSale: HasManyAddAssociationMixin<Sale, number>
  declare addSales: HasManyAddAssociationsMixin<Sale, number>
  declare createSale: HasManyCreateAssociationMixin<Sale>
  declare removeSale: HasManyRemoveAssociationMixin<Sale, number>
  declare removeSales: HasManyRemoveAssociationsMixin<Sale, number>
  declare hasSale: HasManyHasAssociationMixin<Sale, number>
  declare hasSales: HasManyHasAssociationsMixin<Sale, number>
  declare countSales: HasManyCountAssociationsMixin

  // Transaction belongsTo Hotel (as FromHotel)
  declare fromHotel?: NonAttribute<Hotel>
  declare getFromHotel: BelongsToGetAssociationMixin<Hotel>
  declare setFromHotel: BelongsToSetAssociationMixin<Hotel, number>
  declare createFromHotel: BelongsToCreateAssociationMixin<Hotel>

  // Transaction belongsTo Agency (as FromAgency)
  declare fromAgency?: NonAttribute<Agency>
  declare getFromAgency: BelongsToGetAssociationMixin<Agency>
  declare setFromAgency: BelongsToSetAssociationMixin<Agency, number>
  declare createFromAgency: BelongsToCreateAssociationMixin<Agency>

  // Transaction belongsTo Guest (as FromGuest)
  declare fromGuest?: NonAttribute<Guest>
  declare getFromGuest: BelongsToGetAssociationMixin<Guest>
  declare setFromGuest: BelongsToSetAssociationMixin<Guest, number>
  declare createFromGuest: BelongsToCreateAssociationMixin<Guest>

  // Transaction belongsTo Hotel (as ToHotel)
  declare toHotel?: NonAttribute<Hotel>
  declare getToHotel: BelongsToGetAssociationMixin<Hotel>
  declare setToHotel: BelongsToSetAssociationMixin<Hotel, number>
  declare createToHotel: BelongsToCreateAssociationMixin<Hotel>

  // Transaction belongsTo Agency (as ToAgency)
  declare toAgency?: NonAttribute<Agency>
  declare getToAgency: BelongsToGetAssociationMixin<Agency>
  declare setToAgency: BelongsToSetAssociationMixin<Agency, number>
  declare createToAgency: BelongsToCreateAssociationMixin<Agency>

  // Transaction belongsTo Guest (as ToGuest)
  declare toGuest?: NonAttribute<Guest>
  declare getToGuest: BelongsToGetAssociationMixin<Guest>
  declare setToGuest: BelongsToSetAssociationMixin<Guest, number>
  declare createToGuest: BelongsToCreateAssociationMixin<Guest>

  declare static associations: {
    purchases: Association<Transaction, Purchase>,
    sales: Association<Transaction, Sale>,
    fromHotel: Association<Transaction, Hotel>,
    fromAgency: Association<Transaction, Agency>,
    fromGuest: Association<Transaction, Guest>,
    toHotel: Association<Transaction, Hotel>,
    toAgency: Association<Transaction, Agency>,
    toGuest: Association<Transaction, Guest>
  }

  static initModel(sequelize: Sequelize): typeof Transaction {
    Transaction.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      remaining: {
        type: DataTypes.INTEGER
      },
      paymentType: {
        type: DataTypes.ENUM('partial', 'full')
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

    return Transaction
  }
}