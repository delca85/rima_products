"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        macroProduct: (_, { id }, { models }) => models.MacroProduct.findByPk(id, { raw: true }),
        macroProducts: (_, __, { models }) => models.MacroProduct.findAll({ raw: true }),
    },
};
exports.default = resolvers;
//# sourceMappingURL=macroProduct.resolvers.js.map