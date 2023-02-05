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
import type { Account } from './Account'
import type { Purchase } from './Purchase'
import type { Sale } from './Sale'

export type TransactionAssociations = 'purchases' | 'sales' | 'from' | 'to'

export class Transaction extends Model<
  InferAttributes<Transaction, { omit: TransactionAssociations }>,
  InferCreationAttributes<Transaction, { omit: TransactionAssociations }>
> {
  declare id: CreationOptional<number>;
  declare amount: number;
  declare fromId: number;
  declare toId: number;
  declare remaining: number | null;
  declare paymentType: 'partial' | 'full' | null;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // Transaction hasMany Purchase
  declare purchases?: NonAttribute<Purchase[]>;
  declare getPurchases: HasManyGetAssociationsMixin<Purchase>;
  declare setPurchases: HasManySetAssociationsMixin<Purchase, number>;
  declare addPurchase: HasManyAddAssociationMixin<Purchase, number>;
  declare addPurchases: HasManyAddAssociationsMixin<Purchase, number>;
  declare createPurchase: HasManyCreateAssociationMixin<Purchase>;
  declare removePurchase: HasManyRemoveAssociationMixin<Purchase, number>;
  declare removePurchases: HasManyRemoveAssociationsMixin<Purchase, number>;
  declare hasPurchase: HasManyHasAssociationMixin<Purchase, number>;
  declare hasPurchases: HasManyHasAssociationsMixin<Purchase, number>;
  declare countPurchases: HasManyCountAssociationsMixin;

  // Transaction hasMany Sale
  declare sales?: NonAttribute<Sale[]>;
  declare getSales: HasManyGetAssociationsMixin<Sale>;
  declare setSales: HasManySetAssociationsMixin<Sale, number>;
  declare addSale: HasManyAddAssociationMixin<Sale, number>;
  declare addSales: HasManyAddAssociationsMixin<Sale, number>;
  declare createSale: HasManyCreateAssociationMixin<Sale>;
  declare removeSale: HasManyRemoveAssociationMixin<Sale, number>;
  declare removeSales: HasManyRemoveAssociationsMixin<Sale, number>;
  declare hasSale: HasManyHasAssociationMixin<Sale, number>;
  declare hasSales: HasManyHasAssociationsMixin<Sale, number>;
  declare countSales: HasManyCountAssociationsMixin;

  // Transaction belongsTo Account (as From)
  declare from?: NonAttribute<Account>;
  declare getFrom: BelongsToGetAssociationMixin<Account>;
  declare setFrom: BelongsToSetAssociationMixin<Account, number>;
  declare createFrom: BelongsToCreateAssociationMixin<Account>;

  // Transaction belongsTo Account (as To)
  declare to?: NonAttribute<Account>;
  declare getTo: BelongsToGetAssociationMixin<Account>;
  declare setTo: BelongsToSetAssociationMixin<Account, number>;
  declare createTo: BelongsToCreateAssociationMixin<Account>;

  declare static associations: {
    purchases: Association<Transaction, Purchase>;
    sales: Association<Transaction, Sale>;
    from: Association<Transaction, Account>;
    to: Association<Transaction, Account>;
  };

  static initModel(sequelize: Sequelize): typeof Transaction {
    Transaction.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          unique: true,
          autoIncrement: true,
        },
        fromId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Accounts',
            key: 'id',
          },
        },
        toId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Accounts',
            key: 'id',
          },
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        remaining: {
          type: DataTypes.INTEGER,
        },
        paymentType: {
          type: DataTypes.ENUM('partial', 'full'),
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
      },
    );

    return Transaction;
  }
}
