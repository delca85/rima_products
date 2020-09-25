import { isBeta } from '../environment';
import { getEnvironmentConfiguration } from '../environmentConfiguration';

jest.mock('../environment');

describe('configuration by environment', () => {
  it('should return beta config by default', () => {
    isBeta.mockReturnValueOnce(false);

    const received = getEnvironmentConfiguration();

    expect(received).toMatchSnapshot();
  });

  it('should return beta config', () => {
    isBeta.mockReturnValueOnce(true);

    const received = getEnvironmentConfiguration();

    expect(received).toMatchSnapshot();
  });
});
