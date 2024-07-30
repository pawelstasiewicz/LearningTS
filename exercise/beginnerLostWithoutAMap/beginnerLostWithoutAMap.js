"use strict";
// Given an array of integers, return a new array with each value doubled.
Object.defineProperty(exports, "__esModule", { value: true });
exports.maps = void 0;
// For example:
// [1, 2, 3] --> [2, 4, 6]
function maps(x) {
    var arr = [];
    x.forEach(function (n) {
        arr.push(n * 2);
    });
    return arr;
}
exports.maps = maps;
console.log(maps([1, 2, 3]));
