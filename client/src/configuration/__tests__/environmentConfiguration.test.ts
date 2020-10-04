import environment from '../environment';
import { getEnvironmentConfiguration } from '../environmentConfiguration';

describe('configuration by environment', () => {
  it('should return beta config by default', () => {
    jest.spyOn(environment, 'isBeta').mockReturnValue(false);

    const received = getEnvironmentConfiguration();

    expect(received).toMatchSnapshot();
  });

  it('should return beta config', () => {
    jest.spyOn(environment, 'isBeta').mockReturnValue(true);

    const received = getEnvironmentConfiguration();

    expect(received).toMatchSnapshot();
  });

  it('should return production config', () => {
    jest.spyOn(environment, 'isBeta').mockReturnValue(false);
    jest.spyOn(environment, 'isProduction').mockReturnValue(true);

    const received = getEnvironmentConfiguration();

    expect(received).toMatchSnapshot();
  });
});
