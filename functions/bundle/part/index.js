"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.partLoader = exports.partResolvers = exports.partTypeDefs = exports.PartModel = void 0;
var part_model_1 = require("./part.model");
Object.defineProperty(exports, "PartModel", { enumerable: true, get: function () { return __importDefault(part_model_1).default; } });
var part_typeDefs_1 = require("./part.typeDefs");
Object.defineProperty(exports, "partTypeDefs", { enumerable: true, get: function () { return __importDefault(part_typeDefs_1).default; } });
var part_resolvers_1 = require("./part.resolvers");
Object.defineProperty(exports, "partResolvers", { enumerable: true, get: function () { return __importDefault(part_resolvers_1).default; } });
var part_loader_1 = require("./part.loader");
Object.defineProperty(exports, "partLoader", { enumerable: true, get: function () { return __importDefault(part_loader_1).default; } });
//# sourceMappingURL=index.js.map