"use strict";
// Will leave these imports here for now as input is super big and ugly.
var fs = require('fs');
var path = require('path');
var input = fs
    .readFileSync(path.resolve(__dirname, '../03/input.txt'), 'utf-8')
    .split('\n')
    .map(function (e) { return e.trim(); });
function findTrajectory(route, right, down) {
    var tree = '#';
    var routeL = route.length;
    var position = 0, treesHit = 0;
    for (var i = 0; i < routeL; i += down) {
        var currentRow = route[i];
        var currentRowL = currentRow.length;
        var mIndex = currentRowL - 1;
        var current = currentRow[position];
        if (current == tree)
            treesHit += 1;
        if (position > mIndex - right) {
            position -= currentRowL;
        }
        position += right;
    }
    return treesHit;
}
var t1 = findTrajectory.bind(null, input, 1, 1), t2 = findTrajectory.bind(null, input, 3, 1), t3 = findTrajectory.bind(null, input, 5, 1), t4 = findTrajectory.bind(null, input, 7, 1), t5 = findTrajectory.bind(null, input, 1, 2);
console.log("".concat(t1() * t2() * t3() * t4() * t5()));
//# sourceMappingURL=trajectory.js.map