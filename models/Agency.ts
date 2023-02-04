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

type AgencyAssociations = 'account'

export class Agency extends Model<
  InferAttributes<Agency, {omit: AgencyAssociations}>,
  InferCreationAttributes<Agency, {omit: AgencyAssociations}>
> {
  declare id: CreationOptional<number>
  declare name: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Agency belongsTo Account
  declare account?: NonAttribute<Account>
  declare getAccount: BelongsToGetAssociationMixin<Account>
  declare setAccount: BelongsToSetAssociationMixin<Account, number>
  declare createAccount: BelongsToCreateAssociationMixin<Account>
  
  declare static associations: {
    account: Association<Agency, Account>
  }

  static initModel(sequelize: Sequelize): typeof Agency {
    Agency.init({
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
    
    return Agency
  }
}
