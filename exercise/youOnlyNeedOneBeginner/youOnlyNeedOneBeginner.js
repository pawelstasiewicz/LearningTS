"use strict";
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
var check = function (a, x) {
    var value = false;
    a.forEach(function (element) {
        element === x ? value = true : undefined;
    });
    return value; // your code here...
};
exports.check = check;
console.log((0, exports.check)([66, 101], 66));
