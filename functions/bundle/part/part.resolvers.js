"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        part: (_, { id }, { loaders }) => loaders.Part.load(id),
        parts: (_, __, { models }) => models.Part.findAll({ raw: true }),
    },
    Part: {
        subparts: async (parent, _, { models }) => {
            var _a;
            const parentPart = await models.Part.findByPk(parent.id, {
                include: { model: models.Part, as: 'subparts' },
            });
            return (((_a = parentPart === null || parentPart === void 0 ? void 0 : parentPart.subparts) === null || _a === void 0 ? void 0 : _a.map((subpart) => ({
                id: subpart.id,
                name: subpart.name,
                thumb: subpart.thumb,
                parentId: parent.id,
            }))) || []);
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
exports.default = resolvers;
//# sourceMappingURL=part.resolvers.js.map