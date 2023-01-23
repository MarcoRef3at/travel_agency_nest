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
import type { Guest } from './Guest'
import type { Transaction } from './Transaction'
import type { Agency } from './Agency'

type SaleAssociations = 'transaction' | 'traveAgency' | 'guest'

export class Sale extends Model<
  InferAttributes<Sale, {omit: SaleAssociations}>,
  InferCreationAttributes<Sale, {omit: SaleAssociations}>
> {
  declare id: CreationOptional<number>
  declare amount: number | null
  declare status: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Sale belongsTo Transaction
  declare transaction?: NonAttribute<Transaction>
  declare getTransaction: BelongsToGetAssociationMixin<Transaction>
  declare setTransaction: BelongsToSetAssociationMixin<Transaction, number>
  declare createTransaction: BelongsToCreateAssociationMixin<Transaction>
  
  // Sale belongsTo Agency
  declare traveAgency?: NonAttribute<Agency>
  declare getAgency: BelongsToGetAssociationMixin<Agency>
  declare setAgency: BelongsToSetAssociationMixin<Agency, number>
  declare createAgency: BelongsToCreateAssociationMixin<Agency>
  
  // Sale belongsTo Guest
  declare guest?: NonAttribute<Guest>
  declare getGuest: BelongsToGetAssociationMixin<Guest>
  declare setGuest: BelongsToSetAssociationMixin<Guest, number>
  declare createGuest: BelongsToCreateAssociationMixin<Guest>
  
  declare static associations: {
    transaction: Association<Sale, Transaction>,
    traveAgency: Association<Sale, Agency>,
    guest: Association<Sale, Guest>
  }

  static initModel(sequelize: Sequelize): typeof Sale {
    Sale.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      amount: {
        type: DataTypes.INTEGER
      },
      status: {
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
    
    return Sale
  }
}
