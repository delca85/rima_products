"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../sequelize/connection"));
const part_1 = require("../part");
class MacroProduct extends sequelize_1.Model {
}
MacroProduct.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    childPartNo: {
        field: 'child_part_no',
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: part_1.PartModel,
            key: 'id',
        },
    },
    parentPartNo: {
        field: 'parent_part_no',
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: part_1.PartModel,
            key: 'id',
        },
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 1,
    },
}, {
    sequelize: connection_1.default,
    freezeTableName: true,
    tableName: 'macro_products',
    timestamps: false,
});
exports.default = MacroProduct;
//# sourceMappingURL=macroProduct.model.js.map