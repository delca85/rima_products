import mysql2 from 'mysql2';
import sequelize, { logging } from '../connection';

interface ISequelizeArgsOptions {
  host: string;
  port: number;
  dialect: string;
  dialectModule: object;
  logging: () => {};
}

jest.mock('sequelize', () => ({
  Sequelize: jest
    .fn()
    .mockImplementation(
      (
        dbName: string,
        dbUsername: string,
        dbPassword: string,
        { host, port, dialect, dialectModule, logging }: ISequelizeArgsOptions,
      ) => ({ dbName, dbUsername, dbPassword, host, port, dialect, dialectModule, logging }),
    ),
}));

describe('connection module', () => {
  const ACTUAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // most important - it clears the cache
    process.env = { ...ACTUAL_ENV }; // make a copy
  });

  afterAll(() => {
    process.env = ACTUAL_ENV; // restore old env
  });

  it('should create a sequelize object', () => {
    const expected = {
      dbName: 'rima',
      dbUsername: 'rima_user',
      dbPassword: 'rima_pw',
      host: '127.0.0.1',
      port: '3306',
      dialect: 'mysql',
      dialectModule: mysql2,
      logging,
    };

    expect(sequelize).toMatchObject(expected);
  });

  it('should show msg on console', () => {
    const mockedConsoleLog = jest.fn();
    global.console = { ...global.console, log: mockedConsoleLog };

    logging('FAKE_MSG');

    expect(mockedConsoleLog).toHaveBeenCalledWith(['FAKE_MSG']);
  });
});
