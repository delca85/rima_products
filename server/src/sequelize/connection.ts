import { Sequelize } from 'sequelize';
import accessEnv from '../helpers/accessEnv';

const DB_NAME = accessEnv('DB_NAME');
const DB_USERNAME = accessEnv('DB_USERNAME');
const DB_PASSWORD = accessEnv('DB_PASSWORD');
const DB_HOST = accessEnv('DB_HOST');
const DB_PORT = accessEnv('DB_PORT');

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: (...msg) => console.log(msg),
});

export default sequelize;
