"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(str) {
    var text = "";
    for (var i = str.length; i >= 0; i--) {
        text += str[i];
    }
    return text; // reverse this!
}
solution("world");
exports.default = {};
