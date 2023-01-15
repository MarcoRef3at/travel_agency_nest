module.exports = {
  development: {
    dialect: 'mysql',
    database: process.env.MYSQL_DB_NAME || 'travel_agency',
    username: process.env.MYSQL_DB_USERNAME || 'root',
    password: process.env.MYSQL_DB_PASSWORD || '336699',
    host: process.env.MYSQL_DB_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_DB_PORT || '3306')
  },
  test: {
    dialect: 'mysql',
    database: process.env.MYSQL_DB_NAME || 'travel_agency',
    username: process.env.MYSQL_DB_USERNAME || 'root',
    password: process.env.MYSQL_DB_PASSWORD || 'root',
    host: process.env.MYSQL_DB_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_DB_PORT || '3306')
  },
  production: {
    dialect: 'mysql',
    database: process.env.MYSQL_DB_NAME,
    username: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    host: process.env.MYSQL_DB_HOST,
    port: parseInt(process.env.MYSQL_DB_PORT)
  }
}