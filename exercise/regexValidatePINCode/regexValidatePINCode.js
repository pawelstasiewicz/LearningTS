"use strict";
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePin = void 0;
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePin(pin) {
    if (pin.length === 4 || pin.length === 6) {
        var digitPattern = /^\d+$/;
        return digitPattern.test(pin);
    }
    return false;
}
exports.validatePin = validatePin;
console.log(validatePin("1234"));
