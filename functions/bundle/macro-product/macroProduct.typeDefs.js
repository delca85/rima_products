"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const typedefs = graphql_tag_1.default `
  type MacroProduct {
    id: Int!
    parentPartNo: Int!
    childPartNo: Int!
    quantity: Int!
  }

  extend type Query {
    macroProducts: [MacroProduct!]!
    macroProduct(id: Int!): MacroProduct
  }
`;
exports.default = typedefs;
//# sourceMappingURL=macroProduct.typeDefs.js.map