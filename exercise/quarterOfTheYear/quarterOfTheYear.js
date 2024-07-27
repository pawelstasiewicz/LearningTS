"use strict";
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
Object.defineProperty(exports, "__esModule", { value: true });
exports.quarterOf = void 0;
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12
function quarterOf(month) {
    if (month <= 3) {
        return 1;
    }
    else if (month <= 6) {
        return 2;
    }
    else if (month <= 9) {
        return 3;
    }
    else if (month <= 12) {
        return 4;
    }
    else {
        return 0;
    }
}
exports.quarterOf = quarterOf;
quarterOf(3);
