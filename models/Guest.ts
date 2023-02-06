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

type GuestAssociations = 'account';

export class Guest extends Model<
  InferAttributes<Guest, { omit: GuestAssociations }>,
  InferCreationAttributes<Guest, { omit: GuestAssociations }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare accountId: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // Guest belongsTo Account
  declare account?: NonAttribute<Account>;
  declare getAccount: BelongsToGetAssociationMixin<Account>;
  declare setAccount: BelongsToSetAssociationMixin<Account, number>;
  declare createAccount: BelongsToCreateAssociationMixin<Account>;

  declare static associations: {
    account: Association<Guest, Account>;
  };

  static initModel(sequelize: Sequelize): typeof Guest {
    Guest.init(
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

    Guest.beforeCreate(async (guest) => {
      let account = await Account.create({
        name: guest.name,
        type: 'guest',
        credit: 0,
        debit: 0,
      });
      guest.accountId = account.id;
    });

    // TODO: not working try to check it again
    Guest.beforeUpdate(async (guest) => {
      console.log('1');
      console.log('guest.changed(name):', guest.changed('name'));
      // Check if the name field is being updated
      if (guest.changed('name')) {
        // If so, update the related account record
        await Account.update(
          { name: guest.name },
          { where: { id: guest.accountId } },
        );
      }
    });

    return Guest;
  }
}
