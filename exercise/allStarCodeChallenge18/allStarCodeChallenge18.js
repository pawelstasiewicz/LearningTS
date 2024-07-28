"use strict";
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
Object.defineProperty(exports, "__esModule", { value: true });
exports.strCount = void 0;
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1
function strCount(str, letter) {
    var value = 0;
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === letter) {
            value += 1;
        }
    }
    return value; // GO!
}
exports.strCount = strCount;
strCount('Hello', 'o');
