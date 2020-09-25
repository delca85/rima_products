import { isBeta } from './environment';

const graphql = {
  beta: 'http://localhost:7000/graphql',
};

export const getEnvironmentConfiguration = () => {
  if (isBeta()) {
    return {
      graphql: graphql.beta,
    };
  }

  return {
    graphql: graphql.beta,
  };
};
