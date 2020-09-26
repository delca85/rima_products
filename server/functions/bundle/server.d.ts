import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
export declare const createLambdaServer: () => ApolloServerLambda;
export declare const createLocalServer: () => ApolloServer;
