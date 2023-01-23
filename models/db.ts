import { Sequelize, Options } from 'sequelize'
import { config } from 'dotenv'
config()


const sequelize: Sequelize = new Sequelize({
  dialect: 'mysql',
  database: process.env.DB_NAME || 'travel_agency',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '336699',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  define: {
    underscored: true
  },
  logging: true
})

let db = {
  sequelize: sequelize,
  Sequelize: Sequelize
}
export default db
