"use strict";
// Task:
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddOrEven = void 0;
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"
// Have fun!
function oddOrEven(array) {
    // enter code here
    var value = 0;
    array.map(function (e) {
        value += e;
    });
    if (value === 0 || value === undefined) {
        return "even";
    }
    else if (value % 2 === 0) {
        return "even";
    }
    else if (value % 2 !== 0) {
        return "odd";
    }
}
exports.oddOrEven = oddOrEven;
oddOrEven([0]);
