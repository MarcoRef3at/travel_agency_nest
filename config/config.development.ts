import { Dialect } from 'sequelize/types';

export const config = {
    database: {
        dialect: 'mysql' as Dialect,
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '336699',
        database: 'travel_agency',
        logging: false,
    },
    jwtPrivateKey: 'jwtPrivateKey',
};
