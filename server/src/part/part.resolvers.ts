import { Resolvers } from '../types/graphql.generated';

const resolvers: Resolvers = {
  Query: {
    part: (_, { id }, { loaders }) => loaders.Part.load(id),
    parts: (_, __, { models }) => models.Part.findAll({ raw: true }),
  },
  Part: {
    subparts: async (parent, _, { models }) => {
      const parentPart = await models.Part.findByPk(parent.id, {
        include: { model: models.Part, as: 'subparts' },
      });
      return (
        parentPart?.subparts?.map((subpart) => ({
          id: subpart.id,
          name: subpart.name,
          thumb: subpart.thumb,
          subparts: subpart.subparts,
          parentId: parent.id,
        })) || []
      );
    },
    quantity: async (parent, _, { models }) => {
      const associationInfo = await models.MacroProduct.findOne({
        where: { parentPartNo: parent.parentId, childPartNo: parent.id },
      });
      if (associationInfo) {
        return associationInfo.quantity;
      }
      return 0;
    },
  },
};

export default resolvers;
