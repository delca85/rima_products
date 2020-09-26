"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const typedefs = graphql_tag_1.default `
  type Part {
    id: Int!
    name: String!
    thumb: String
    quantity: Int
    subparts: [Part!]
    parentId: Int
  }

  type Query {
    parts: [Part!]!
    part(id: Int!): Part
  }
`;
exports.default = typedefs;
//# sourceMappingURL=part.typeDefs.js.map