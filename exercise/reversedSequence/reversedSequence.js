"use strict";
// Build a function that returns an array of integers from n to 1 where n>0.
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseSeq = void 0;
// Example : n=5 --> [5,4,3,2,1]
var reverseSeq = function (n) {
    var arr = [];
    var value = n;
    for (var i = value; i > 0; i--) {
        var a = i;
        arr.push(a);
        value = -1;
    }
    return arr;
};
exports.reverseSeq = reverseSeq;
(0, exports.reverseSeq)(5);
