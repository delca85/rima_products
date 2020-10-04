import environment from '../environment';
const { isBeta, isProduction } = environment;

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

  it('should detect production mode, when REACT_APP_ENV variable is "production"', () => {
    process.env.REACT_APP_ENV = 'production';
    expect(isProduction()).toBe(true);
  });
});
