"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const part_1 = require("./part");
const macro_product_1 = require("./macro-product");
exports.createContext = () => ({
    models: { Part: part_1.PartModel, MacroProduct: macro_product_1.MacroProductModel },
    loaders: { Part: part_1.partLoader() },
});
//# sourceMappingURL=context.js.map