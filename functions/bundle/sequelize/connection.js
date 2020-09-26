"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const accessEnv_1 = __importDefault(require("../helpers/accessEnv"));
const DB_URL = accessEnv_1.default('DB_URL');
const sequelize = new sequelize_1.Sequelize(DB_URL, {
    logging: (...msg) => console.log(msg),
});
exports.default = sequelize;
//# sourceMappingURL=connection.js.map