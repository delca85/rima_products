import 'dotenv/config';
import sequelize from './sequelize/connection';
import { createLocalServer } from './server';
import './part/part.model';
import './macro-product/macroProduct.model';
import accessEnv from './helpers/accessEnv';

const PORT = accessEnv('PORT', 7000);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const server = createLocalServer();

server.listen(PORT, '0.0.0.0', () => {
  console.info(`🚀 RIMA server listening on ${PORT}`);
});
