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
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Purchase } from './Purchase'

type HotelAssociations = 'purchases'

export class Hotel extends Model<
  InferAttributes<Hotel, {omit: HotelAssociations}>,
  InferCreationAttributes<Hotel, {omit: HotelAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Hotel hasMany Purchase
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
  
  declare static associations: {
    purchases: Association<Hotel, Purchase>
  }

  static initModel(sequelize: Sequelize): typeof Hotel {
    Hotel.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      name: {
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
    
    return Hotel
  }
}
