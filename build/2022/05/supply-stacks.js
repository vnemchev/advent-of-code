"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function supplyStacker(input) {
    var _a = __read(input.split('\n\n'), 2), stackInfo = _a[0], moveInfo = _a[1];
    var stack = generateStack(stackInfo);
    if (typeof stack === 'string')
        return stack;
    // const modifiedStack1 = modifyStackSingle(moveInfo, stack);
    var modifiedStack2 = modifyStackMultiple(moveInfo, stack);
    // const crates1 = getTopCrates(modifiedStack1);
    var crates2 = getTopCrates(modifiedStack2);
    // return crates1;
    return crates2;
}
function generateStack(stackInfo) {
    var _a;
    var rows = stackInfo.split('\n');
    var positions = (_a = rows
        .pop()) === null || _a === void 0 ? void 0 : _a.replaceAll('   ', '').trim().split('').map(Number);
    if (positions == undefined)
        return 'bad input!';
    var posCount = positions[positions.length - 1];
    var stack = Array.from(Array(posCount), function () { return []; });
    var tempStack = [];
    // Fill a temp array for easy storage
    for (var i = 0; i < posCount - 1; i++) {
        var currentRow = rows[i];
        tempStack[i] = [];
        for (var j = 1; j <= currentRow.length; j += 4) {
            var item = currentRow[j];
            tempStack[i].push(item);
        }
    }
    // Fill the result array correctly by cycling through the temp one
    for (var i = 0; i < tempStack.length; i++) {
        var row = tempStack[i];
        for (var j = 0; j < row.length; j++) {
            var item = row[j];
            if (item !== ' ')
                stack[j].unshift(item);
        }
    }
    return stack;
}
function modifyStackSingle(moveInfo, stack) {
    var rows = moveInfo.split('\n');
    for (var i = 0; i < rows.length; i++) {
        var _a = __read(rows[i].split(' ').map(Number), 6), moveCount = _a[1], from = _a[3], to = _a[5];
        for (var j = 0; j < moveCount; j++) {
            var takenBoxes = stack[from - 1].pop();
            stack[to - 1].push(takenBoxes);
        }
    }
    return stack;
}
function modifyStackMultiple(moveInfo, stack) {
    var rows = moveInfo.split('\n');
    for (var i = 0; i < rows.length; i++) {
        var _a = __read(rows[i].split(' ').map(Number), 6), moveCount = _a[1], from = _a[3], to = _a[5];
        var index = stack[from - 1].length - moveCount;
        var part = stack[from - 1].splice(index);
        stack[to - 1] = __spreadArray(__spreadArray([], __read(stack[to - 1]), false), __read(part), false);
    }
    return stack;
}
function getTopCrates(stack) {
    var res = '';
    stack.forEach(function (r) { return (res += r[r.length - 1]); });
    return res;
}
console.log(supplyStacker("                [V]     [C]     [M]\n[V]     [J]     [N]     [H]     [V]\n[R] [F] [N]     [W]     [Z]     [N]\n[H] [R] [D]     [Q] [M] [L]     [B]\n[B] [C] [H] [V] [R] [C] [G]     [R]\n[G] [G] [F] [S] [D] [H] [B] [R] [S]\n[D] [N] [S] [D] [H] [G] [J] [J] [G]\n[W] [J] [L] [J] [S] [P] [F] [S] [L]\n 1   2   3   4   5   6   7   8   9 \n\nmove 2 from 2 to 7\nmove 8 from 5 to 6\nmove 2 from 4 to 5\nmove 1 from 4 to 5\nmove 1 from 5 to 8\nmove 5 from 9 to 2\nmove 7 from 1 to 6\nmove 7 from 3 to 8\nmove 1 from 4 to 6\nmove 2 from 5 to 6\nmove 6 from 7 to 5\nmove 2 from 2 to 4\nmove 4 from 5 to 2\nmove 10 from 8 to 1\nmove 2 from 7 to 4\nmove 4 from 2 to 8\nmove 2 from 9 to 8\nmove 1 from 8 to 4\nmove 2 from 4 to 9\nmove 5 from 8 to 2\nmove 1 from 4 to 6\nmove 1 from 8 to 9\nmove 1 from 7 to 2\nmove 2 from 4 to 2\nmove 1 from 7 to 3\nmove 13 from 2 to 1\nmove 1 from 2 to 4\nmove 1 from 2 to 3\nmove 2 from 5 to 4\nmove 17 from 6 to 4\nmove 3 from 4 to 9\nmove 14 from 1 to 4\nmove 4 from 6 to 8\nmove 1 from 9 to 8\nmove 23 from 4 to 8\nmove 6 from 1 to 7\nmove 3 from 1 to 5\nmove 1 from 3 to 8\nmove 5 from 7 to 8\nmove 1 from 3 to 4\nmove 1 from 5 to 3\nmove 1 from 5 to 1\nmove 1 from 3 to 2\nmove 1 from 9 to 4\nmove 9 from 4 to 9\nmove 1 from 1 to 2\nmove 11 from 8 to 2\nmove 1 from 4 to 5\nmove 13 from 2 to 3\nmove 7 from 9 to 6\nmove 1 from 5 to 6\nmove 1 from 5 to 2\nmove 1 from 9 to 4\nmove 1 from 4 to 9\nmove 2 from 8 to 9\nmove 1 from 7 to 8\nmove 8 from 9 to 1\nmove 8 from 1 to 4\nmove 4 from 6 to 7\nmove 1 from 9 to 4\nmove 2 from 3 to 9\nmove 1 from 9 to 1\nmove 6 from 4 to 1\nmove 2 from 1 to 3\nmove 22 from 8 to 6\nmove 1 from 2 to 5\nmove 3 from 7 to 8\nmove 15 from 6 to 4\nmove 7 from 3 to 7\nmove 4 from 6 to 9\nmove 2 from 9 to 2\nmove 6 from 3 to 5\nmove 3 from 9 to 5\nmove 5 from 5 to 8\nmove 1 from 2 to 1\nmove 6 from 8 to 2\nmove 1 from 1 to 2\nmove 3 from 5 to 3\nmove 1 from 7 to 2\nmove 4 from 7 to 8\nmove 4 from 6 to 1\nmove 1 from 5 to 1\nmove 4 from 8 to 7\nmove 2 from 3 to 2\nmove 1 from 1 to 3\nmove 15 from 4 to 2\nmove 3 from 7 to 3\nmove 4 from 7 to 2\nmove 1 from 4 to 9\nmove 5 from 3 to 8\nmove 29 from 2 to 1\nmove 1 from 9 to 5\nmove 1 from 2 to 1\nmove 11 from 1 to 5\nmove 1 from 4 to 5\nmove 2 from 6 to 3\nmove 1 from 3 to 4\nmove 16 from 1 to 9\nmove 4 from 8 to 4\nmove 3 from 6 to 9\nmove 1 from 3 to 7\nmove 1 from 7 to 3\nmove 6 from 1 to 6\nmove 3 from 4 to 3\nmove 3 from 8 to 5\nmove 3 from 1 to 8\nmove 3 from 1 to 4\nmove 2 from 4 to 9\nmove 3 from 6 to 3\nmove 15 from 5 to 2\nmove 3 from 2 to 3\nmove 4 from 2 to 7\nmove 2 from 5 to 9\nmove 10 from 3 to 6\nmove 11 from 9 to 5\nmove 2 from 4 to 9\nmove 8 from 9 to 4\nmove 1 from 9 to 6\nmove 7 from 4 to 6\nmove 3 from 5 to 8\nmove 22 from 6 to 9\nmove 4 from 7 to 8\nmove 8 from 5 to 8\nmove 2 from 4 to 3\nmove 1 from 8 to 1\nmove 17 from 8 to 3\nmove 3 from 3 to 4\nmove 13 from 3 to 9\nmove 20 from 9 to 7\nmove 2 from 2 to 9\nmove 19 from 9 to 5\nmove 1 from 1 to 4\nmove 3 from 2 to 7\nmove 4 from 4 to 3\nmove 1 from 9 to 8\nmove 18 from 5 to 1\nmove 1 from 9 to 4\nmove 1 from 9 to 7\nmove 2 from 4 to 8\nmove 1 from 5 to 4\nmove 3 from 2 to 7\nmove 3 from 3 to 1\nmove 2 from 1 to 3\nmove 3 from 3 to 8\nmove 1 from 4 to 8\nmove 6 from 8 to 2\nmove 1 from 3 to 9\nmove 1 from 3 to 9\nmove 10 from 1 to 9\nmove 7 from 1 to 7\nmove 4 from 7 to 4\nmove 29 from 7 to 3\nmove 6 from 2 to 9\nmove 25 from 3 to 6\nmove 5 from 3 to 9\nmove 13 from 6 to 9\nmove 12 from 6 to 2\nmove 1 from 8 to 9\nmove 10 from 2 to 6\nmove 7 from 6 to 5\nmove 20 from 9 to 3\nmove 11 from 3 to 6\nmove 1 from 7 to 9\nmove 2 from 2 to 9\nmove 19 from 9 to 2\nmove 14 from 6 to 8\nmove 4 from 5 to 2\nmove 2 from 4 to 6\nmove 3 from 5 to 1\nmove 13 from 8 to 5\nmove 1 from 6 to 1\nmove 2 from 4 to 2\nmove 8 from 2 to 4\nmove 6 from 4 to 7\nmove 1 from 9 to 8\nmove 2 from 4 to 7\nmove 5 from 2 to 4\nmove 4 from 4 to 2\nmove 10 from 5 to 6\nmove 1 from 1 to 7\nmove 1 from 5 to 4\nmove 1 from 4 to 9\nmove 4 from 7 to 8\nmove 5 from 1 to 7\nmove 1 from 9 to 7\nmove 7 from 3 to 2\nmove 2 from 5 to 2\nmove 8 from 6 to 9\nmove 1 from 4 to 6\nmove 3 from 7 to 4\nmove 5 from 9 to 7\nmove 2 from 4 to 3\nmove 20 from 2 to 4\nmove 2 from 4 to 8\nmove 14 from 4 to 2\nmove 12 from 7 to 4\nmove 8 from 2 to 1\nmove 10 from 2 to 4\nmove 6 from 8 to 5\nmove 1 from 7 to 8\nmove 4 from 4 to 3\nmove 1 from 3 to 9\nmove 1 from 2 to 7\nmove 1 from 6 to 8\nmove 5 from 3 to 5\nmove 1 from 3 to 2\nmove 7 from 4 to 5\nmove 6 from 1 to 7\nmove 5 from 7 to 6\nmove 1 from 6 to 5\nmove 2 from 7 to 8\nmove 1 from 2 to 6\nmove 2 from 8 to 2\nmove 5 from 5 to 7\nmove 6 from 6 to 8\nmove 16 from 4 to 9\nmove 16 from 9 to 4\nmove 11 from 5 to 4\nmove 5 from 8 to 3\nmove 2 from 5 to 2\nmove 14 from 4 to 2\nmove 1 from 6 to 3\nmove 1 from 6 to 9\nmove 1 from 5 to 3\nmove 3 from 8 to 2\nmove 10 from 4 to 7\nmove 5 from 9 to 2\nmove 3 from 4 to 7\nmove 1 from 1 to 4\nmove 3 from 2 to 5\nmove 2 from 3 to 7\nmove 1 from 4 to 2\nmove 18 from 2 to 8\nmove 3 from 8 to 4\nmove 5 from 3 to 1\nmove 1 from 3 to 9\nmove 1 from 9 to 3\nmove 8 from 8 to 7\nmove 2 from 5 to 4\nmove 1 from 5 to 6\nmove 1 from 2 to 5\nmove 1 from 5 to 8\nmove 1 from 6 to 9\nmove 3 from 2 to 7\nmove 27 from 7 to 4\nmove 2 from 2 to 4\nmove 4 from 8 to 4\nmove 1 from 9 to 8\nmove 3 from 1 to 6\nmove 1 from 3 to 5\nmove 3 from 8 to 3\nmove 1 from 1 to 4\nmove 1 from 8 to 1\nmove 3 from 1 to 4\nmove 2 from 8 to 2\nmove 2 from 6 to 2\nmove 8 from 4 to 9\nmove 1 from 7 to 1\nmove 1 from 5 to 4\nmove 1 from 7 to 3\nmove 4 from 2 to 7\nmove 1 from 8 to 6\nmove 8 from 9 to 7\nmove 1 from 6 to 3\nmove 3 from 3 to 4\nmove 37 from 4 to 1\nmove 1 from 4 to 5\nmove 13 from 7 to 8\nmove 6 from 8 to 4\nmove 5 from 8 to 3\nmove 1 from 7 to 6\nmove 4 from 1 to 5\nmove 1 from 6 to 5\nmove 2 from 8 to 4\nmove 32 from 1 to 5\nmove 1 from 1 to 4\nmove 5 from 3 to 5\nmove 1 from 3 to 2\nmove 1 from 2 to 9\nmove 19 from 5 to 2\nmove 1 from 9 to 1\nmove 16 from 5 to 1\nmove 7 from 5 to 6\nmove 1 from 3 to 1\nmove 11 from 1 to 2\nmove 18 from 2 to 4\nmove 1 from 5 to 9\nmove 8 from 6 to 1\nmove 10 from 2 to 6\nmove 7 from 4 to 9\nmove 2 from 2 to 1\nmove 7 from 4 to 2\nmove 5 from 4 to 5\nmove 2 from 9 to 6\nmove 9 from 6 to 3\nmove 5 from 5 to 3\nmove 8 from 4 to 9\nmove 7 from 9 to 8\nmove 4 from 2 to 9\nmove 10 from 3 to 1\nmove 6 from 8 to 1\nmove 2 from 6 to 3\nmove 5 from 3 to 8\nmove 3 from 2 to 7\nmove 1 from 9 to 5\nmove 1 from 3 to 5\nmove 2 from 7 to 8\nmove 1 from 8 to 9\nmove 1 from 6 to 1\nmove 23 from 1 to 4\nmove 2 from 5 to 3\nmove 1 from 8 to 2\nmove 2 from 8 to 5\nmove 2 from 5 to 6\nmove 1 from 2 to 7\nmove 1 from 7 to 5\nmove 4 from 9 to 7\nmove 1 from 7 to 5\nmove 1 from 3 to 6\nmove 3 from 7 to 4\nmove 1 from 3 to 8\nmove 1 from 4 to 6\nmove 6 from 1 to 8\nmove 4 from 6 to 4\nmove 2 from 9 to 1\nmove 1 from 5 to 1\nmove 19 from 4 to 2\nmove 2 from 9 to 3\nmove 1 from 9 to 3\nmove 9 from 1 to 8\nmove 1 from 5 to 8\nmove 1 from 9 to 3\nmove 2 from 3 to 9\nmove 3 from 8 to 4\nmove 1 from 4 to 9\nmove 1 from 9 to 5\nmove 2 from 3 to 4\nmove 6 from 4 to 7\nmove 3 from 9 to 5\nmove 4 from 4 to 7\nmove 1 from 5 to 6\nmove 18 from 2 to 7\nmove 13 from 7 to 9\nmove 3 from 5 to 1\nmove 1 from 2 to 1\nmove 1 from 6 to 5\nmove 3 from 1 to 7\nmove 1 from 1 to 5\nmove 7 from 9 to 6\nmove 8 from 7 to 4\nmove 11 from 7 to 6\nmove 5 from 9 to 2\nmove 17 from 6 to 1\nmove 2 from 5 to 1\nmove 11 from 8 to 1\nmove 20 from 1 to 2\nmove 3 from 8 to 1\nmove 1 from 9 to 8\nmove 1 from 6 to 1\nmove 11 from 1 to 7\nmove 18 from 2 to 3\nmove 12 from 4 to 8\nmove 11 from 7 to 3\nmove 7 from 2 to 3\nmove 2 from 1 to 5\nmove 1 from 1 to 3\nmove 1 from 8 to 1\nmove 1 from 5 to 9\nmove 1 from 9 to 6\nmove 1 from 8 to 7\nmove 1 from 5 to 3\nmove 1 from 6 to 7\nmove 2 from 8 to 1\nmove 8 from 3 to 2\nmove 7 from 2 to 9\nmove 6 from 8 to 6\nmove 1 from 9 to 3\nmove 2 from 6 to 4\nmove 5 from 9 to 6\nmove 7 from 6 to 2\nmove 8 from 2 to 9\nmove 2 from 1 to 9\nmove 2 from 7 to 2\nmove 2 from 4 to 8\nmove 1 from 2 to 7\nmove 25 from 3 to 7\nmove 7 from 9 to 7\nmove 1 from 2 to 5\nmove 1 from 1 to 4\nmove 3 from 8 to 1\nmove 3 from 1 to 8\nmove 3 from 7 to 8\nmove 15 from 7 to 3\nmove 10 from 8 to 3\nmove 1 from 5 to 7\nmove 1 from 8 to 5\nmove 3 from 9 to 2\nmove 1 from 6 to 4\nmove 2 from 2 to 7\nmove 1 from 2 to 5\nmove 14 from 7 to 9\nmove 1 from 6 to 2\nmove 1 from 7 to 1\nmove 1 from 5 to 4\nmove 3 from 4 to 3\nmove 1 from 7 to 6\nmove 1 from 2 to 7\nmove 1 from 1 to 2\nmove 3 from 9 to 1\nmove 1 from 6 to 2\nmove 2 from 2 to 6\nmove 17 from 3 to 6\nmove 1 from 8 to 3\nmove 1 from 5 to 4\nmove 2 from 7 to 2\nmove 9 from 9 to 8\nmove 1 from 9 to 3\nmove 16 from 3 to 2\nmove 1 from 7 to 5\nmove 5 from 6 to 5\nmove 1 from 1 to 6\nmove 1 from 4 to 1\nmove 1 from 9 to 3\nmove 9 from 8 to 6\nmove 3 from 1 to 5\nmove 1 from 9 to 1\nmove 16 from 2 to 1\nmove 2 from 2 to 7\nmove 2 from 3 to 9\nmove 2 from 7 to 4\nmove 2 from 9 to 3\nmove 3 from 3 to 5\nmove 1 from 4 to 5\nmove 1 from 4 to 2\nmove 1 from 1 to 7\nmove 1 from 7 to 1\nmove 1 from 3 to 6\nmove 2 from 5 to 1\nmove 3 from 6 to 2\nmove 2 from 5 to 8\nmove 8 from 5 to 4\nmove 1 from 5 to 3\nmove 1 from 3 to 2\nmove 1 from 8 to 3\nmove 1 from 3 to 8\nmove 4 from 1 to 7\nmove 9 from 1 to 7\nmove 6 from 1 to 8\nmove 3 from 7 to 4\nmove 7 from 6 to 7\nmove 11 from 4 to 3\nmove 2 from 3 to 8\nmove 8 from 3 to 8\nmove 4 from 6 to 1\nmove 1 from 7 to 4\nmove 2 from 1 to 2\nmove 8 from 7 to 2\nmove 1 from 4 to 8\nmove 10 from 8 to 2\nmove 2 from 6 to 1\nmove 1 from 1 to 4\nmove 1 from 4 to 8\nmove 2 from 1 to 4\nmove 6 from 6 to 5\nmove 1 from 1 to 9\nmove 2 from 6 to 8\nmove 1 from 4 to 5\nmove 1 from 6 to 9\nmove 4 from 8 to 9\nmove 1 from 7 to 1\nmove 6 from 8 to 6\nmove 1 from 6 to 1\nmove 1 from 4 to 9\nmove 2 from 9 to 5\nmove 5 from 5 to 9\nmove 8 from 9 to 5\nmove 2 from 8 to 5\nmove 3 from 6 to 9\nmove 8 from 5 to 7\nmove 5 from 5 to 6\nmove 1 from 9 to 2\nmove 1 from 3 to 1\nmove 1 from 6 to 7\nmove 1 from 5 to 6\nmove 24 from 2 to 4\nmove 3 from 9 to 7\nmove 16 from 4 to 5\nmove 2 from 1 to 3\nmove 12 from 5 to 6\nmove 1 from 9 to 5\nmove 4 from 5 to 9\nmove 1 from 1 to 6\nmove 1 from 5 to 2\nmove 2 from 9 to 8\nmove 1 from 8 to 1\nmove 5 from 4 to 5\nmove 2 from 3 to 5\nmove 1 from 8 to 3\nmove 1 from 1 to 6\nmove 3 from 5 to 7\nmove 1 from 9 to 1\nmove 1 from 2 to 8"));
//# sourceMappingURL=supply-stacks.js.map