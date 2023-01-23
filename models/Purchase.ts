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
import { Agency } from './Agency'
import { Hotel } from './Hotel'
import type { Transaction } from './Transaction'

export type PurchaseAssociations = 'hotel' | 'agency' | 'transaction'

export class Purchase extends Model<
  InferAttributes<Purchase, { omit: PurchaseAssociations }>,
  InferCreationAttributes<Purchase, { omit: PurchaseAssociations }>
> {
  declare id: CreationOptional<number>
  declare amount: number | null
  declare hotelId: number | null
  declare agencyId: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Purchase belongsTo Hotel
  declare hotel?: NonAttribute<Hotel>
  declare getHotel: BelongsToGetAssociationMixin<Hotel>
  declare setHotel: BelongsToSetAssociationMixin<Hotel, number>
  declare createHotel: BelongsToCreateAssociationMixin<Hotel>

  // Purchase belongsTo Agency
  declare agency?: NonAttribute<Agency>
  declare getAgency: BelongsToGetAssociationMixin<Agency>
  declare setAgency: BelongsToSetAssociationMixin<Agency, number>
  declare createAgency: BelongsToCreateAssociationMixin<Agency>

  // Purchase belongsTo Transaction
  declare transaction?: NonAttribute<Transaction>
  declare getTransaction: BelongsToGetAssociationMixin<Transaction>
  declare setTransaction: BelongsToSetAssociationMixin<Transaction, number>
  declare createTransaction: BelongsToCreateAssociationMixin<Transaction>

  declare static associations: {
    hotel: Association<Purchase, Hotel>,
    agency: Association<Purchase, Agency>,
    transaction: Association<Purchase, Transaction>
  }
  static initModel(sequelize: Sequelize): typeof Purchase {
    Purchase.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
      },
      amount: {
        type: DataTypes.INTEGER
      },
      hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      agencyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
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

    // add validation for hotelId
    Purchase.addHook('beforeValidate', (purchase: Purchase) => {
      return Hotel.findByPk(purchase.hotelId)
        .then(hotel => {
          if (!hotel) {
            throw new Error('Invalid hotel ID');
          } else {
            if (purchase.agencyId) {
              return Agency.findByPk(purchase.agencyId)
                .then(travelAgency => {
                  if (!travelAgency) {
                    throw new Error('Invalid travel agency ID');
                  }
                }).catch(err => { console.log(err) })
            }
          }
        }).catch(err => {
          console.log(err)
        })
    })
    return Purchase
  }

}
