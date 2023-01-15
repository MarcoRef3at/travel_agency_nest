import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Guest } from './Guest'
import type { Hotel } from './Hotel'
import type { Purchase } from './Purchase'
import type { Sale } from './Sale'
import type { TraveAgency } from './TraveAgency'

type TransactionAssociations = 'purchase' | 'sale' | 'toHotel' | 'fromGuest' | 'toGuest' | 'fromTravelAgency' | 'toTravelAgency'

export class Transaction extends Model<
  InferAttributes<Transaction, {omit: TransactionAssociations}>,
  InferCreationAttributes<Transaction, {omit: TransactionAssociations}>
> {
  declare id: CreationOptional<number>
  declare amount: number
  declare isVoid: boolean
  declare isCredit: boolean
  declare method: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Transaction hasOne Purchase
  declare purchase?: NonAttribute<Purchase>
  declare getPurchase: HasOneGetAssociationMixin<Purchase>
  declare setPurchase: HasOneSetAssociationMixin<Purchase, number>
  declare createPurchase: HasOneCreateAssociationMixin<Purchase>
  
  // Transaction hasOne Sale
  declare sale?: NonAttribute<Sale>
  declare getSale: HasOneGetAssociationMixin<Sale>
  declare setSale: HasOneSetAssociationMixin<Sale, number>
  declare createSale: HasOneCreateAssociationMixin<Sale>
  
  // Transaction belongsTo Hotel (as ToHotel)
  declare toHotel?: NonAttribute<Hotel>
  declare getToHotel: BelongsToGetAssociationMixin<Hotel>
  declare setToHotel: BelongsToSetAssociationMixin<Hotel, number>
  declare createToHotel: BelongsToCreateAssociationMixin<Hotel>
  
  // Transaction belongsTo Guest (as FromGuest)
  declare fromGuest?: NonAttribute<Guest>
  declare getFromGuest: BelongsToGetAssociationMixin<Guest>
  declare setFromGuest: BelongsToSetAssociationMixin<Guest, number>
  declare createFromGuest: BelongsToCreateAssociationMixin<Guest>
  
  // Transaction belongsTo Guest (as ToGuest)
  declare toGuest?: NonAttribute<Guest>
  declare getToGuest: BelongsToGetAssociationMixin<Guest>
  declare setToGuest: BelongsToSetAssociationMixin<Guest, number>
  declare createToGuest: BelongsToCreateAssociationMixin<Guest>
  
  // Transaction belongsTo TraveAgency (as FromTravelAgency)
  declare fromTravelAgency?: NonAttribute<TraveAgency>
  declare getFromTravelAgency: BelongsToGetAssociationMixin<TraveAgency>
  declare setFromTravelAgency: BelongsToSetAssociationMixin<TraveAgency, number>
  declare createFromTravelAgency: BelongsToCreateAssociationMixin<TraveAgency>
  
  // Transaction belongsTo TraveAgency (as ToTravelAgency)
  declare toTravelAgency?: NonAttribute<TraveAgency>
  declare getToTravelAgency: BelongsToGetAssociationMixin<TraveAgency>
  declare setToTravelAgency: BelongsToSetAssociationMixin<TraveAgency, number>
  declare createToTravelAgency: BelongsToCreateAssociationMixin<TraveAgency>
  
  declare static associations: {
    purchase: Association<Transaction, Purchase>,
    sale: Association<Transaction, Sale>,
    toHotel: Association<Transaction, Hotel>,
    fromGuest: Association<Transaction, Guest>,
    toGuest: Association<Transaction, Guest>,
    fromTravelAgency: Association<Transaction, TraveAgency>,
    toTravelAgency: Association<Transaction, TraveAgency>
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
      isVoid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      isCredit: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      method: {
        type: DataTypes.STRING
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
