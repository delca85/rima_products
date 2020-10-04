import environment from './environment';

const graphql = {
  beta: 'http://localhost:7000/graphql',
  production: '/.netlify/functions/graphql',
};

export const getEnvironmentConfiguration = () => {
  if (environment.isBeta()) {
    return {
      graphql: graphql.beta,
    };
  }
  if (environment.isProduction()) {
    return {
      graphql: graphql.production,
    };
  }
  return {
    graphql: graphql.beta,
  };
};
