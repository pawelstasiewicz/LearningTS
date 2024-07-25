"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSmallestInt = void 0;
function findSmallestInt(args) {
    var final = Math.min.apply(Math, args);
    return final;
}
exports.findSmallestInt = findSmallestInt;
findSmallestInt([34, -345, -1, 100]);
