import {
  Association,
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
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
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

type AccountAssociations = 'purchases' | 'sales' | 'hotel' | 'guest' | 'agency'

export class Account extends Model<
  InferAttributes<Account, {omit: AccountAssociations}>,
  InferCreationAttributes<Account, {omit: AccountAssociations}>
> {
  declare id: CreationOptional<number>
  declare credit: number | null
  declare debit: number | null
  declare type: 'guest' | 'hotel' | 'agency'
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Account hasMany Purchase
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
  
  // Account hasMany Sale
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
  
  // Account hasOne Hotel
  declare hotel?: NonAttribute<Hotel>
  declare getHotel: HasOneGetAssociationMixin<Hotel>
  declare setHotel: HasOneSetAssociationMixin<Hotel, number>
  declare createHotel: HasOneCreateAssociationMixin<Hotel>
  
  // Account hasOne Guest
  declare guest?: NonAttribute<Guest>
  declare getGuest: HasOneGetAssociationMixin<Guest>
  declare setGuest: HasOneSetAssociationMixin<Guest, number>
  declare createGuest: HasOneCreateAssociationMixin<Guest>
  
  // Account hasOne Agency
  declare agency?: NonAttribute<Agency>
  declare getAgency: HasOneGetAssociationMixin<Agency>
  declare setAgency: HasOneSetAssociationMixin<Agency, number>
  declare createAgency: HasOneCreateAssociationMixin<Agency>
  
  declare static associations: {
    purchases: Association<Account, Purchase>,
    sales: Association<Account, Sale>,
    hotel: Association<Account, Hotel>,
    guest: Association<Account, Guest>,
    agency: Association<Account, Agency>
  }

  static initModel(sequelize: Sequelize): typeof Account {
    Account.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      credit: {
        type: DataTypes.INTEGER
      },
      debit: {
        type: DataTypes.INTEGER
      },
      type: {
        type: DataTypes.ENUM('guest', 'hotel', 'agency'),
        allowNull: false
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
    
    return Account
  }
}
