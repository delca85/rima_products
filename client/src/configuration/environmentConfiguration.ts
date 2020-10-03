import { isBeta, isProduction } from './environment';

const graphql = {
  beta: 'http://localhost:7000/graphql',
  production: '/.netlify/functions/graphql',
};

export const getEnvironmentConfiguration = () => {
  if (isBeta()) {
    return {
      graphql: graphql.beta,
    };
  }
  if (isProduction()) {
    return {
      graphql: graphql.production,
    };
  }
  return {
    graphql: graphql.beta,
  };
};
