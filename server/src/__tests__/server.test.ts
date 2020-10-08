import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import depthLimit from 'graphql-depth-limit';
import { mocked } from 'ts-jest/utils';
import { createLambdaServer, createLocalServer } from '../server';

jest.mock('apollo-server');
jest.mock('apollo-server-lambda');

jest.mock('graphql-depth-limit', () => () => 'FAKE_DEPTH_LIMIT');

jest.mock('../context', () => ({
  createContext: () => 'FAKE_CONTEXT',
}));

jest.mock('../part', () => ({
  __esModule: true,
  partTypeDefs: 'FAKE_PART_TYPE_DEFS',
  partResolvers: 'FAKE_PART_RESOLVERS',
}));

jest.mock('../macro-product', () => ({
  __esModule: true,
  macroProductTypeDefs: 'FAKE_MACRO_PRODUCT_TYPE_DEFS',
  macroProductResolvers: 'FAKE_MACRO_PRODUCT_RESOLVERS',
}));

const mockTypeDefs = ['FAKE_PART_TYPE_DEFS', 'FAKE_MACRO_PRODUCT_TYPE_DEFS'];
const mockResolvers = ['FAKE_PART_RESOLVERS', 'FAKE_MACRO_PRODUCT_RESOLVERS'];

describe('server', () => {
  it('should create a lambda server with the right args', () => {
    const MockApolloServerLambda = mocked(ApolloServerLambda, true);
    const expected = {
      typeDefs: mockTypeDefs,
      resolvers: mockResolvers,
      introspection: true,
      playground: true,
      validationRules: ['FAKE_DEPTH_LIMIT'],
      context: 'FAKE_CONTEXT',
    };

    createLambdaServer();

    expect(MockApolloServerLambda).toHaveBeenCalledWith(expected);
  });
  it('should create a local server with the right args', () => {
    const MockApolloServer = mocked(ApolloServer, true);
    const expected = {
      typeDefs: mockTypeDefs,
      resolvers: mockResolvers,
      introspection: true,
      playground: true,
      validationRules: ['FAKE_DEPTH_LIMIT'],
      context: 'FAKE_CONTEXT',
    };

    createLocalServer();

    expect(MockApolloServer).toHaveBeenCalledWith(expected);
  });
});
