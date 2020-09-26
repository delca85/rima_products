import { Resolvers } from '../types/graphql.generated';

const resolvers: Resolvers = {
  Query: {
    macroProduct: (_, { id }, { models }) => models.MacroProduct.findByPk(id, { raw: true }),
    macroProducts: (_, __, { models }) => models.MacroProduct.findAll({ raw: true }),
  },
};

export default resolvers;
