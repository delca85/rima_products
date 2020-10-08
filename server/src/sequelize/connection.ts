import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';
import accessEnv from '../helpers/accessEnv';

const DB_NAME = accessEnv('DB_NAME');
const DB_USERNAME = accessEnv('DB_USERNAME');
const DB_PASSWORD = accessEnv('DB_PASSWORD');
const DB_HOST = accessEnv('DB_HOST');
const DB_PORT = accessEnv('DB_PORT');

export const logging = (...msg: any) => console.log(msg);

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  dialectModule: mysql2,
  logging,
});

export default sequelize;
