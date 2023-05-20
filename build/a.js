"use strict";
function diagonalSum(mat) {
    var matSide = mat.length;
    var sum = 0;
    for (var i = 0, j = i; i < matSide; i++, j++) {
        var leftEl = mat[i][j];
        var rightEl = mat[i][matSide - 1 - j];
        var isCommonElement = mat[i].indexOf(leftEl) === mat[i].indexOf(rightEl);
        if (matSide % 2 !== 0 && isCommonElement) {
            sum += leftEl;
        }
        else {
            sum += leftEl + rightEl;
        }
    }
    return sum;
}
var mat = [
    [4, 6, 7],
    [2, 9, 4],
    [5, 5, 5],
];
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
console.log(diagonalSum(mat));
//# sourceMappingURL=a.js.map