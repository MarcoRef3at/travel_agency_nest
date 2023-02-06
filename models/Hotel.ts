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
import { Account } from './Account';

type HotelAssociations = 'account';

export class Hotel extends Model<
  InferAttributes<Hotel, { omit: HotelAssociations }>,
  InferCreationAttributes<Hotel, { omit: HotelAssociations }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare accountId: number;
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
        accountId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'accounts',
            key: 'id',
          },
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

    Hotel.beforeCreate(async (hotel) => {
      let account = await Account.create({
        name: hotel.name,
        type: 'hotel',
        credit: 0,
        debit: 0,
      });
      hotel.accountId = account.id;
    });

    // TODO
    // Hotel.beforeUpdate(async (hotel) => {
    //   console.log('1');
    //   console.log('hotel.changed(name):', hotel.changed('name'));
    //   // Check if the name field is being updated
    //   if (hotel.changed('name')) {
    //     // If so, update the related account record
    //     await Account.update(
    //       { name: hotel.name },
    //       { where: { id: hotel.accountId } },
    //     );
    //   }
    // });
    return Hotel;
  }
}
