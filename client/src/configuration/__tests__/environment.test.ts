import { isBeta } from '../environment';

describe('environment module', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('should not detect beta mode, when REACT_APP_ENV variable is not "beta"', () => {
    process.env.REACT_APP_ENV = 'another value';
    expect(isBeta()).toBe(false);
  });

  it('should detect beta mode, when REACT_APP_ENV variable is "beta"', () => {
    process.env.REACT_APP_ENV = 'beta';
    expect(isBeta()).toBe(true);
  });
});
