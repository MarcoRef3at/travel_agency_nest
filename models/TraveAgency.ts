import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class TraveAgency extends Model<
  InferAttributes<TraveAgency>,
  InferCreationAttributes<TraveAgency>
> {
  declare id: CreationOptional<number>
  declare name: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  
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
