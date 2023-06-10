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
    // const crates1 = getTopCrates(modifiedStack1);
    var modifiedStack2 = modifyStackMultiple(moveInfo, stack);
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
//# sourceMappingURL=supply-stacks.js.map