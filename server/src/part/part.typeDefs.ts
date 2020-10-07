import gql from 'graphql-tag';

const typeDefs = gql`
  type Part {
    id: Int!
    name: String!
    thumb: String
    manual: String
    drawings: String
    quantity: Int
    subparts: [Part!]
    parentId: Int
  }

  type Query {
    parts: [Part!]!
    part(id: Int!): Part
  }
`;

export default typeDefs;
