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
import type { Sale } from './Sale'

type GuestAssociations = 'sales'

export class Guest extends Model<
  InferAttributes<Guest, {omit: GuestAssociations}>,
  InferCreationAttributes<Guest, {omit: GuestAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Guest hasMany Sale
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
  
  declare static associations: {
    sales: Association<Guest, Sale>
  }

  static initModel(sequelize: Sequelize): typeof Guest {
    Guest.init({
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
    
    return Guest
  }
}
