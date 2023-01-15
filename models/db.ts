import { Sequelize, Options } from 'sequelize'
import configs from '../config/config'

const env = process.env.NODE_ENV || 'development'
// const config = {
//   dialect: 'mysql',
//   database: process.env.MYSQL_DB_NAME || 'travel_agency',
//   username: process.env.MYSQL_DB_USERNAME || 'root',
//   password: process.env.MYSQL_DB_PASSWORD || '336699',
//   host: process.env.MYSQL_DB_HOST || 'localhost',
//   port: parseInt(process.env.MYSQL_DB_PORT || '3306')
// }


const sequelize: Sequelize = new Sequelize({
  dialect: 'mysql',
  database: process.env.MYSQL_DB_NAME || 'travel_agency',
  username: process.env.MYSQL_DB_USERNAME || 'root',
  password: process.env.MYSQL_DB_PASSWORD || '336699',
  host: process.env.MYSQL_DB_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_DB_PORT || '3306'),
  define: {
    underscored: true
  }
})

let db = {
  sequelize: sequelize,
  Sequelize: Sequelize
}
export default db
