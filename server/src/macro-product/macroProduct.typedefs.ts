import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

const typedefs: DocumentNode = gql`
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

export default typedefs;
