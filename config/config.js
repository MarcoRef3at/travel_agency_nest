module.exports = {
     development: {
          dialect: 'mysql',
          database: process.env.MYSQL_DB_NAME || 'travel_agency',
          username: process.env.MYSQL_DB_USERNAME || 'root',
          password: process.env.MYSQL_DB_PASSWORD || '336699',
          host: process.env.MYSQL_DB_HOST || 'localhost',
          port: parseInt(process.env.MYSQL_DB_PORT || '3306')
     }
}