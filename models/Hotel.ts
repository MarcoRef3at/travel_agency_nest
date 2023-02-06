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

type HotelAssociations = 'account'

export class Hotel extends Model<
  InferAttributes<Hotel, { omit: HotelAssociations }>,
  InferCreationAttributes<Hotel, { omit: HotelAssociations }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // Hotel belongsTo Account
  declare account?: NonAttribute<Account>;
  declare getAccount: BelongsToGetAssociationMixin<Account>;
  declare setAccount: BelongsToSetAssociationMixin<Account, number>;
  declare createAccount: BelongsToCreateAssociationMixin<Account>;

  declare static associations: {
    account: Association<Hotel, Account>;
  };

  static initModel(sequelize: Sequelize): typeof Hotel {
    Hotel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
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

    return Hotel;
  }
}
