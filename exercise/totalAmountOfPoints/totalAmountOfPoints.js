"use strict";
// Our football team has finished the championship.
Object.defineProperty(exports, "__esModule", { value: true });
exports.points = void 0;
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
function points(games) {
    var score = 0;
    for (var i = 0; i < games.length; i++) {
        var teamValue = Number(games[i][0]);
        var oponentValue = Number(games[i][2]);
        if (teamValue > oponentValue) {
            score += 3;
        }
        else if (teamValue < oponentValue) {
            score += 0;
        }
        else if (teamValue === oponentValue) {
            score += 1;
        }
    }
    return score; // your code here
}
exports.points = points;
points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);
