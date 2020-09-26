"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const connection_1 = __importDefault(require("./sequelize/connection"));
const server_1 = require("./server");
require("./part/part.model");
require("./macro-product/macroProduct.model");
const accessEnv_1 = __importDefault(require("./helpers/accessEnv"));
const PORT = accessEnv_1.default('PORT', 7000);
connection_1.default.authenticate();
const server = server_1.createLocalServer();
server.listen(PORT, '0.0.0.0', () => {
    console.info(`🚀 RIMA server listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map