import accessEnv, { getCacheValue, setCacheValue } from '../accessEnv';

describe('access env module', () => {
  const ACTUAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // most important - it clears the cache
    process.env = { ...ACTUAL_ENV }; // make a copy
  });

  afterAll(() => {
    process.env = ACTUAL_ENV; // restore old env
  });

  it('should set a value in cache through setCacheValue and this value should be readable using getCacheValue', () => {
    setCacheValue('FAKE_KEY', 'FAKE_VALUE');

    expect(getCacheValue('FAKE_KEY')).toBe('FAKE_VALUE');
  });

  it('should return default value if key is not in process.env but default value is provided', () => {
    expect(accessEnv('FAKE_KEY', 'FAKE_VALUE')).toBe('FAKE_VALUE');
  });

  it('should throw an error if key is not in process env and no default value has been provided', () => {
    expect(() => {
      accessEnv('FAKE_KEY');
    }).toThrow('FAKE_KEY not found in process.env!');
  });

  it('should return a cached value if the cache is set for that key', () => {
    process.env.FAKE_KEY = 'FAKE_VALUE';
    setCacheValue('FAKE_KEY', 'FAKE_VALUE');

    expect(accessEnv('FAKE_KEY')).toBe(getCacheValue('FAKE_KEY'));
  });
});
