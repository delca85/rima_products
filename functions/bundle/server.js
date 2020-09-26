"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalServer = exports.createLambdaServer = void 0;
const apollo_server_1 = require("apollo-server");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const part_1 = require("./part");
const macro_product_1 = require("./macro-product");
const context_1 = require("./context");
// const app = express();
const typeDefs = [part_1.partTypeDefs, macro_product_1.macroProductTypeDefs];
const resolvers = [part_1.partResolvers, macro_product_1.macroProductResolvers];
const context = context_1.createContext();
exports.createLambdaServer = () => new apollo_server_lambda_1.ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context
});
exports.createLocalServer = () => new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context
});
// server.applyMiddleware({ app });
//# sourceMappingURL=server.js.map