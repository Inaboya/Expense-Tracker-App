"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommas = void 0;
const addCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
exports.addCommas = addCommas;
//# sourceMappingURL=format.js.map