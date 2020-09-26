"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache = {};
const accessEnv = (key, defaultValue) => {
    if (!(key in process.env)) {
        if (defaultValue)
            return defaultValue;
        throw new Error(`${key} not found in process.env!`);
    }
    if (cache[key])
        return cache[key];
    cache[key] = process.env[key];
    return process.env[key];
};
exports.default = accessEnv;
//# sourceMappingURL=accessEnv.js.map