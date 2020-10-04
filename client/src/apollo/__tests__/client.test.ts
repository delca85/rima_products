import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnvironmentConfiguration } from '../../configuration/environmentConfiguration';
import buildApolloClient from '../client';

jest.mock('@apollo/client', () => ({
  ApolloClient: jest.fn(),
  InMemoryCache: jest.fn(),
}));

jest.mock('../../configuration/environmentConfiguration');
const mockGetEnvironmentConfiguration = getEnvironmentConfiguration as jest.MockedFunction<
  typeof getEnvironmentConfiguration
>;

describe('apollo client creation', () => {
  it('should create a compliant apollo client', () => {
    mockGetEnvironmentConfiguration.mockReturnValueOnce({
      graphql: 'FAKE_GRAPHQL',
    });

    buildApolloClient();

    expect(ApolloClient).toHaveBeenCalledTimes(1);
    expect(ApolloClient).toHaveBeenCalledWith({
      uri: 'FAKE_GRAPHQL',
      cache: new InMemoryCache(),
    });
  });
});
