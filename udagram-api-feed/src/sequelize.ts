import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { config } from './config/config';

const dialect: Dialect = 'postgres';   // ou config.dialect se já for "postgres"

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  storage: ':memory:',
});
