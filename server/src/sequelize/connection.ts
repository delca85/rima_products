import { Sequelize } from 'sequelize';
import accessEnv from '../helpers/accessEnv';

const DB_URL = accessEnv('DB_URL');

const sequelize = new Sequelize(DB_URL, {
  logging: (...msg) => console.log(msg),
});

export default sequelize;
