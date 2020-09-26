import gql from 'graphql-tag';

const typedefs = gql`
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

export default typedefs;
