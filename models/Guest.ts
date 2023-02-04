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

type GuestAssociations = 'account'

export class Guest extends Model<
  InferAttributes<Guest, {omit: GuestAssociations}>,
  InferCreationAttributes<Guest, {omit: GuestAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Guest belongsTo Account
  declare account?: NonAttribute<Account>
  declare getAccount: BelongsToGetAssociationMixin<Account>
  declare setAccount: BelongsToSetAssociationMixin<Account, number>
  declare createAccount: BelongsToCreateAssociationMixin<Account>
  
  declare static associations: {
    account: Association<Guest, Account>
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
