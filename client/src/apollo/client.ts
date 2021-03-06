import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnvironmentConfiguration } from '../configuration/environmentConfiguration';

const buildApolloClient = () => {
  const { graphql } = getEnvironmentConfiguration();
  const cache = new InMemoryCache();

  return new ApolloClient({
    uri: graphql,
    cache,
  });
};

export default buildApolloClient;
