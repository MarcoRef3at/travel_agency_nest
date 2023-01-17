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
import type { Sale } from './Sale'

type TraveAgencyAssociations = 'purchases' | 'sales'

export class TraveAgency extends Model<
  InferAttributes<TraveAgency, {omit: TraveAgencyAssociations}>,
  InferCreationAttributes<TraveAgency, {omit: TraveAgencyAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // TraveAgency hasMany Purchase
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
  
  // TraveAgency hasMany Sale
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
    purchases: Association<TraveAgency, Purchase>,
    sales: Association<TraveAgency, Sale>
  }

  static initModel(sequelize: Sequelize): typeof TraveAgency {
    TraveAgency.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    
    return TraveAgency
  }
}
