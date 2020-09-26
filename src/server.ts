import express from 'express';
import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { partTypeDefs, partResolvers } from './part';
import { macroProductTypeDefs, macroProductResolvers } from './macro-product';
import { createContext } from './context';

// const app = express();

const typeDefs = [partTypeDefs, macroProductTypeDefs];
const resolvers = [partResolvers, macroProductResolvers];
const context = createContext();

export const createLambdaServer = () => new ApolloServerLambda({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context
})

export const createLocalServer = () => new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context
})


// server.applyMiddleware({ app });
