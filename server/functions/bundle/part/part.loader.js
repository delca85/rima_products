"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchParts = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const part_model_1 = __importDefault(require("./part.model"));
const formatParts = (modelInstances) => modelInstances.map((instance) => ({
    id: instance.id,
    name: instance.name,
    thumb: instance.thumb,
    parentId: instance.parentId,
    subparts: instance.subparts,
}));
exports.batchParts = async (ids) => {
    const parts = await part_model_1.default.findAll({
        where: {
            id: [...ids],
        },
        raw: true,
    });
    if (parts.length) {
        return formatParts(parts);
    }
    return [];
};
const partLoader = () => new dataloader_1.default(exports.batchParts);
exports.default = partLoader;
//# sourceMappingURL=part.loader.js.map