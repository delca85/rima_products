"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../sequelize/connection"));
const macro_product_1 = require("../macro-product");
class Part extends sequelize_1.Model {
}
Part.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    thumb: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: connection_1.default,
    modelName: 'part',
    freezeTableName: true,
    tableName: 'parts',
    timestamps: false,
});
Part.belongsToMany(Part, {
    through: { model: macro_product_1.MacroProductModel },
    as: 'subparts',
    foreignKey: 'parentPartNo',
    otherKey: 'childPartNo',
});
exports.default = Part;
//# sourceMappingURL=part.model.js.map