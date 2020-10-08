import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import depthLimit from 'graphql-depth-limit';
import { partTypeDefs, partResolvers } from './part';
import { macroProductTypeDefs, macroProductResolvers } from './macro-product';
import context from './context';

const typeDefs = [partTypeDefs, macroProductTypeDefs];
const resolvers = [partResolvers, macroProductResolvers];
const { createContext } = context;

export const createLambdaServer = () =>
  new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    validationRules: [depthLimit(3)],
    context: createContext(),
  });

export const createLocalServer = () =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    validationRules: [depthLimit(3)],
    context: createContext(),
  });
