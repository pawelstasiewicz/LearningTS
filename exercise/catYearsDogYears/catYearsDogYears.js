"use strict";
// Kata Task
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanYearsCatYearsDogYears = void 0;
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
function humanYearsCatYearsDogYears(humanYears) {
    var catYear = 0;
    var dogYear = 0;
    if (humanYears <= 0) {
        return undefined;
    }
    else if (humanYears === 1) {
        catYear += 15;
        dogYear += 15;
    }
    else if (humanYears >= 2) {
        catYear += 24;
        dogYear += 24;
    }
    if (humanYears > 2 && (humanYears !== 1 && humanYears !== 2)) {
        catYear += 4 * (humanYears - 2);
        dogYear += 5 * (humanYears - 2);
    }
    // Your code here!
    return [humanYears, catYear, dogYear];
}
exports.humanYearsCatYearsDogYears = humanYearsCatYearsDogYears;
console.log(humanYearsCatYearsDogYears(10));
