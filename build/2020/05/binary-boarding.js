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
function binaryBoarding(input) {
    var rowCount = 128, colCount = 8, rowSeats = __spreadArray([], __read(Array(rowCount).keys()), false), colSeats = __spreadArray([], __read(Array(colCount).keys()), false);
    var partitions = input.split('\n');
    var ids = [];
    partitions.forEach(function (part) {
        var _a = rowSearch(part, rowSeats), row = _a.row, restInput = _a.restInput;
        var col = columnSearch(restInput, colSeats);
        var id = getSeatId(row, col, colCount);
        ids.push(id);
    });
    var biggestId = ids.sort(function (a, b) { return b - a; })[0];
    return biggestId;
}
function getSeatId(row, col, colCount) {
    return row * colCount + col;
}
function columnSearch(string, range) {
    var current = string[0];
    var rangeL = range.length;
    var newRange = [];
    var newString = string.substring(1);
    if (current == 'L') {
        newRange = range.slice(0, rangeL / 2);
    }
    else if (current == 'R') {
        newRange = range.slice(rangeL / 2);
    }
    if (newRange.length > 1) {
        return columnSearch(newString, newRange);
    }
    else {
        return newRange[0];
    }
}
function rowSearch(string, range) {
    var current = string[0];
    var rangeL = range.length;
    var newRange = [];
    var newString = string.substring(1);
    if (current == 'F') {
        newRange = range.slice(0, rangeL / 2);
    }
    else if (current == 'B') {
        newRange = range.slice(rangeL / 2);
    }
    if (newRange.length > 1) {
        return rowSearch(newString, newRange);
    }
    else {
        return {
            row: newRange[0],
            restInput: newString,
        };
    }
}
console.log(binaryBoarding("BFBFFBBRLR\nFBFBFFBRLL\nBFBFBFFRLR\nBFFBFBFRLL\nFFBFFFBRLL\nBFBFFFFLRR\nBFBFBFBRRL\nBFBFFFBLRL\nBFFBBBBRLR\nBFFBFFFLRL\nBFBFBFBLRR\nFBFFBFBRLL\nBFFFFBBLRL\nFBFBFBBLLL\nFFFBFBBLRR\nFBFFFBFRLL\nFFFBBFBLLL\nBFFBBFFRRR\nBFFBBFBLRL\nBFFFBBBRLR\nBFFBFFBLRR\nFFBBFFFLRL\nBFBBBBBRLR\nBFBFBBBRRR\nFBFFBFBLRR\nFBBFBBBRLR\nFBFFFBBLLR\nBFFBBBBRRR\nBFBFBFFRLL\nFFFBFBFLLL\nBBFFFBBRLR\nBFBFFFFRLR\nBFBBBFBLRL\nFBBBBFFRLR\nFFBBBBFRRR\nFBFBFFFLRR\nFFFBFFBLRL\nBFFFFBBLRR\nFFBFFFBLLR\nFBFFFFFRLL\nBFFFFBFLRR\nBBFFFFFLLL\nFBFFBBBRLL\nFBFFFFBLLR\nBFFFFFBRRR\nBFBFFFFRRL\nFBBBBFBRRR\nFBFBFFFLLL\nFBFFFFBRRL\nFFBBFFBRRR\nFBFFBBFLLL\nFFBFBBBRLL\nBFBFFFFLRL\nFFBFFFFLRL\nBFBFFFBRLR\nFFFBFBFRRR\nBFBFBBFRLL\nFFBFFBBLRR\nFBBFBBBRRL\nFFBBFFBRLL\nFBFBBBBRRR\nBFBBFFBLLL\nBFBFBBBRLR\nFFBBFBBLLL\nBBFFBBBLRL\nFBFBBBBLRL\nFBFFFBFLLR\nFFFBFBBLRL\nFBBBFFBLLL\nFFBFBBFLLR\nFBFFFFBLRR\nFFBBFBBRLR\nBBFFFBBRRR\nBFBFFBFRRL\nFFBFBBFRRR\nBFFFFFFLLR\nBBFFFFFRRR\nBFBBBFFLRL\nFBBFFFBLLR\nFFBFBFFRLL\nFBFBFBFLRR\nBFBBBBFLLR\nFBBBBFBRRL\nFFBBBBFRLL\nFFBBBFBRLR\nBBFFFBBLLL\nBFFFBBFLLL\nFFBFBBFLLL\nFFBFFFFLLL\nFFBFBFBRLR\nBFBBBFFLLR\nFFFBFBFLRL\nBBFFBBFLLL\nFFBFBFBLRR\nFFBFFBFRLR\nFBFBFFBRRR\nFFBFBFFLRR\nBFBFBBBLLR\nFFFBBFFLRR\nBFFBFBFLRL\nBFBBFFFLLR\nBBFFBBFLLR\nBFFFBBFLRL\nBFBBFBBRRR\nBFFBBBFLRL\nFBBBFBFRLL\nBFFBFFFLLR\nBFBFFBFLLL\nBFFBBBFLRR\nBFBBFFBRLL\nFBBFFFBRRR\nBFBBFBFRRL\nFFFBBFFLLR\nFBBFFBBLLL\nFFBBFBFRRR\nBBFFFFFLLR\nFFBFBFBRLL\nFFFBBBFRLR\nBFFBBFBLRR\nFBFBBBFLRR\nFBBBBBBLRR\nBBFFBFFRRL\nFBFBBBFRRR\nFFBFFFBLLL\nFBBFBFBLRL\nBFBBFBBLLR\nBFBBBBFLLL\nBFBBBBBLLR\nFBBBFFFRRR\nBFFBBFBRLR\nBFBBFBFLRL\nBFBBFFFRLL\nFBBFBFFLRL\nFBFFFFBLLL\nBFBBBBBLRR\nFBBBFBFLRL\nBFBFBBFLRL\nFFBBFFFLLR\nFFBBBBBLRR\nFBBBBBFLLR\nFBBBFBFRRR\nFBBFBFFLLL\nBBFFFBBLRR\nFFFBFFBLLR\nBBFFFBBRRL\nFBBBFBFLLL\nBFFFBBFRRR\nFFFBFFFRRL\nFFFBBBBRRR\nFBBBFBBRRL\nBFFBBBBLRL\nFFBBBFBRLL\nBFFFFFBLRR\nFFBFFBFRRL\nFBBBBFFLLR\nFBBFBFFRRL\nFBFBBBFRRL\nFFBFFBBRRL\nFBFFFFBRLL\nFFBFBFFLLR\nBFBBBFFRLR\nBFBBFFBRRL\nFFBBFFBLLR\nBFFBBBFRLR\nFFBBFBBLRR\nFBFBBBBLLR\nFFBFBFFRRR\nBFBFBFBRRR\nFFFBFFBRRL\nBFFFBBFRLL\nBFBBFBFRLL\nFBBFFBFRRL\nFBBFFFBRRL\nBFFFBFBRRR\nBFFFFFBLLL\nFBBFFBBRRL\nBFFFBBFRLR\nFBFFBBFRLR\nFFFBBBBLRL\nBFFBFFBRRL\nFBFBBBBRRL\nFBBFBFFLRR\nBFBBBBBLRL\nBFFBFBBRRL\nBBFFBFFRRR\nFBBBFFBRLL\nFBBFFBBLRL\nFBFBBFBRRL\nBBFFBBFRRL\nBFBFFFFLLL\nBFFFFFBRRL\nFFBFFFBRLR\nBFFFBFFRLR\nFBFBFFFRLR\nFFBBFBFLLR\nFBBBFBBLLL\nFFBBFBBRRL\nBFFBBFBLLR\nFFBBBBFLRL\nBFFBBBFRRR\nBFFFFBBLLL\nFFBBBFFLRR\nFBFFFBBLRL\nFBBFBBFRLL\nBFBBFBFLLR\nFBFFBBFLRL\nFFBBBBBLLL\nFFBFFBFLLR\nFBBBFFFRLL\nBFFBBFFRLL\nFFBBBBFRLR\nFBBFFBFRLR\nBFBBBBFRLL\nBFFFBFBRLR\nBFBFBBFLLR\nFBFFFFFRRL\nBFBBBFFLLL\nBFFBFBBLRL\nFBBFFFBLRR\nBFFFFFBRLR\nFBBBBBBLLR\nFBFFBFBLLL\nFBFBFBFRLR\nFBFFBBBLLL\nBFFBBBFLLR\nFBBFBBFRLR\nFFFBBBFRLL\nFFBFBBFRLL\nBBFFFFBLLR\nFBFFBFFLRR\nBFFBBFFLLL\nBBFFFBBRLL\nFFFBFBBLLL\nBFFFFFFRRL\nBFBFBBBRLL\nFBFFBBBRRR\nBFFFBBFLRR\nFBBFBBFLLL\nFBBFBFFRLR\nFBFFFBFRLR\nBBFFBFBLRL\nFFBBBBBRLL\nFBFBFFFLLR\nBFFFFFFRLR\nFFBBFFBLRR\nFFFBBFFRRR\nFBBBFFFLLR\nFBFBBBBRLL\nBBFFFFFLRR\nFFBFFBBRLR\nFFBBFFFLRR\nBFFBFBFLRR\nBFFBFBBRLL\nFBFBFFBRLR\nBFFBFBBLLL\nBFBBFFFLRL\nFBBBFBBRLR\nFFFBBBFLRL\nFFBFFBBRRR\nFBFBBBBRLR\nFFFBBFFRLR\nBFBFFFBLLR\nBFBFBBFLLL\nFBFFBBFRRR\nFBBFBBFLLR\nFBBBBFFRRL\nBFFBBBBLLL\nFFBBBBBRLR\nBFFFBFFLRR\nBFFFBBFLLR\nFBFBBFFLLL\nBBFFFBFRLL\nBFBFFBFLLR\nFFBFFBFLRR\nBFBBBBFLRL\nFBFBBFFLRL\nFFBBFBFLLL\nFBFBBFFLLR\nFBFFFBFLRR\nFBBBBBFRLL\nFBFBBFBRRR\nFFBBFBBRLL\nBBFFFFBLRR\nBFFBBFFLLR\nFBBBBFBLLL\nBFBFBFBRLL\nFFFBFBBLLR\nFBFFBBBRLR\nBBFFFFBRRL\nFFBBBBFLLL\nFBFBFBBLRL\nFBFBBFFRRL\nFBBFBBBLLR\nBFFFFFBLRL\nFFBFBBBRRL\nFFBFBBBLLL\nFBBBBFBLLR\nFBFBFFFRRL\nBFBBBBBRRR\nFBBBFFBRRR\nBFBFFBBLLR\nFBFFBBFLRR\nFFBFFFFLRR\nFBFFFFFRLR\nFBBBBBBRRR\nBFFFBFFLLR\nFFBBBFBLLL\nBFFFBFFRRL\nFFFBFFBRRR\nBFFFFFBLLR\nBFBFBFFLLR\nFBBBBBBRLL\nFFBFFFFRRR\nFBBFFBFRLL\nFBBFFFBLRL\nBFFFFBFLRL\nFBFBBBFRLL\nBBFFBBFLRR\nFFFBBFFRLL\nFBBFFBFLLR\nBFFFFFFRRR\nFFBFBFBLRL\nBFFBFBFRRL\nBBFFFFBLLL\nFFBBBFBRRL\nFBFBBFBRLL\nBFBBFBBRRL\nBFBFFBBRRL\nFFFBBFBLLR\nFFBFBBBRRR\nFBBFFBFRRR\nBFFFFFBRLL\nFFFBBBBLLR\nBFBBFBBLLL\nFFBBFBFLRR\nBFBBFFBRLR\nFBBBFFBRLR\nBFFFBFFLLL\nBFBBFBFLLL\nFBBFBBBLLL\nBFBFBBFRRL\nBFFFBBBLRL\nBFBFBFFLRR\nFBBFBFBRLR\nFBFBFFBLRR\nBBFFFBFRRR\nBFBFFBFRLL\nBFBBBFBLRR\nFBBBFFBRRL\nFBFFFBBRRL\nFBBBBFBLRR\nBFFBBBFRRL\nBBFFBFBRLR\nBBFFBBFRRR\nBFBFFFBLLL\nBFBBFFBLRR\nFBFBBFBLLR\nFFFBBFFLLL\nFFBBFBBRRR\nBFBBBBFRLR\nFBBBFFFLRL\nFFFBBFFLRL\nBFBBBFFRRL\nBBFFBFBLLR\nBFFBFBFRLR\nBFBBFFFLLL\nBFFFBFBLLL\nFBFFBFFRLR\nBFFFBFBLRR\nFFBBFFFLLL\nBFBBBFBRRL\nFBBBFFFLRR\nFBFFBFFLLL\nBFFBBBBLRR\nFBBFBBBLRL\nBBFFFBBLLR\nFBFBBBFRLR\nFFFBFBFRRL\nFBBFBFBLLR\nFBFBFBFRRR\nBFFFBBBLLR\nBFFFBBBLLL\nFBBFBFFRLL\nFFFBFBFLRR\nBFBBFBBRLL\nBFBBBFBLLR\nBFFBFFBLLR\nBFFFFBBRLR\nBFFFBFBRRL\nBBFFFBFRLR\nBFFBFFBLRL\nFBBBFBBLLR\nBFFBFFBLLL\nBBFFBBFRLR\nFFBFBBFLRL\nFBBBBBFRRL\nBFFBBFFRRL\nBFFFFBFLLR\nFBFBBBFLRL\nBFFFBFBLLR\nFBFBBFBLLL\nFFBBFBFRRL\nFFBBBBBRRR\nFBFFFBFLLL\nBFBFBFBRLR\nFBFFBBBLRL\nFBBFFBFLRL\nFFBBBFBLLR\nFBFFBFFRRR\nBFBBFBFRRR\nBFFBFBFLLL\nBFFBFFBRRR\nBBFFBBFRLL\nFBBFFFFLLR\nFBBFFBFLRR\nBFFFBBBRLL\nFBBBFFBLRR\nFFFBFBFRLR\nFFBFBFFRRL\nFFBBFFBRLR\nFBBBBFBLRL\nFBFFBFFLRL\nBFFBFFFRRR\nBFFFFBFLLL\nFFBFBBBLLR\nFFBBBFFLRL\nBFBFFFBRRL\nFBBBBFFRRR\nBFFFBBBLRR\nBFBBBFBRRR\nFBBBBFBRLR\nFBFBBFBRLR\nFFBFFBBLRL\nFBBBFFBLRL\nBFBFFFBLRR\nFBBBFBBLRR\nBFFFFBBRRL\nBBFFFBBLRL\nFFFBFFBRLR\nFBFFBFFRRL\nFFFBFFBLLL\nFBBFBBBRLL\nFBBBFBBLRL\nBFBFFBBLRR\nFFBBBBBRRL\nBFFBBFBRLL\nBBFFBFFLRL\nFBFFFBFLRL\nBFBFBFFRRR\nFBBBBFFLRL\nFBFFFBBRLR\nBFBBBBFLRR\nBFFFFBBRRR\nBFBBFBFRLR\nBFFBFBBRRR\nBFFFBFFRLL\nFFFBBFBRLR\nBBFFFFBRRR\nFBBBBBBLRL\nFFFBBBFRRL\nFFBBFFFRRL\nBBFFFFFRRL\nFBBBFFFRLR\nFBBFBFBLLL\nFFFBFBBRRR\nFBBBBBBRLR\nFBFBFBBRLR\nFFBBBFBLRR\nFFBBFFBLLL\nFFFBFBBRRL\nFFBFBBBLRR\nFFBFBBBLRL\nFFBBFBFRLR\nFFBFBFBLLL\nFFFBBBFLLR\nFFFBBBBRRL\nFFBBFBBLLR\nFBBFBFBRLL\nFFBFBFFLLL\nFFBBBBFLRR\nFBFBFBFLLL\nFBFFFBFRRR\nFBBBBBFLRL\nFBFBFBBRLL\nFFBFFFBRRL\nFBBFBFBLRR\nFFBFFFBLRR\nFFBFFFFRRL\nBFBBFBBLRL\nFBBBBFFRLL\nBFBBFBBRLR\nBFFBFFFRLR\nFBBFFFBRLR\nFBFFFFFRRR\nFBFFFFFLRL\nBFFFFBFRRR\nBFFFFFFLRR\nBFFFBFFRRR\nFFBBFFBRRL\nFBFBBBBLLL\nFFBFFBFRLL\nFFBBBFFRRR\nFFBBBBBLRL\nFBBBBBFLRR\nFFFBFBFLLR\nBFFFFBBRLL\nFBFFBFBLRL\nFBFBFFFLRL\nFBFFBBFRLL\nFBFFBFBRLR\nFBBBFBFRLR\nBBFFFFBLRL\nFFBFFBFLRL\nBFFFBBFRRL\nBFBFFFFLLR\nBFFBBBFLLL\nBBFFFBFRRL\nFFBBFFFRRR\nBFFFFBFRLL\nFFBFBFFLRL\nFBFBFFBLLL\nBFFFFBFRRL\nFFFBFBBRLL\nFBFFBBBLRR\nBFBBBBBRLL\nBFBBFFFRRL\nBFBFFFBRRR\nFBBBBBBLLL\nBFFFFBFRLR\nBFBBFFBRRR\nFBBBFBBRRR\nFFBFFBBRLL\nFBFBFBBLRR\nFFFBBBBLLL\nFBFBBBFLLL\nBFFBFFBRLL\nBFBFBBFLRR\nFFFBFBBRLR\nBBFFBFFRLR\nFBFBFBFLLR\nBFBBBBFRRR\nFBFBFBFRLL\nBFBFFBBRLL\nFFBFFFBLRL\nFBBBFFFLLL\nBFFBBFFLRR\nFBBFFBBLLR\nFFFBBBFLLL\nFBBFBFFRRR\nFBBFFBBRRR\nFFBFBFBRRL\nFBBFFFBRLL\nFBFBFFBRRL\nBFBFBBFRRR\nBBFFBBBLLL\nFFBFFBBLLR\nBFBFBFBLLR\nFFBBFFFRLL\nFBBBFBFRRL\nFFBBBFFLLR\nFFFBFFBLRR\nFBBFFFBLLL\nBBFFFFFRLL\nBFFFBFFLRL\nFBFFBBFRRL\nFFBFBBFRLR\nBBFFFFBRLL\nBFBBFBFLRR\nBFBFBFBLLL\nFFBBBFBLRL\nFBBFBBBRRR\nFBBFFFFRLL\nBFBBBBBRRL\nFBBFBBFRRL\nFBFBBBFLLR\nBFBFBFBLRL\nBBFFBFFLLL\nBFFBFFBRLR\nBFBFFBFLRL\nBFBFBBFRLR\nFBBFFBBLRR\nBFBFFBBRRR\nBFFFBBBRRR\nFBBFFFFRRR\nFBBFFFFLRL\nBFBFFBFLRR\nFBBBBFFLRR\nFFFBFFFRRR\nBFBFBBBLRL\nFBFFFFFLRR\nBFBBBFFLRR\nFBFFBBFLLR\nBBFFFBFLRR\nBFFBFBFLLR\nBBFFBFFLLR\nBFBBFFFRLR\nBBFFFBFLLL\nFFBFFFFRLR\nBFFBFBBRLR\nFBBFBBBLRR\nFBFBFFFRRR\nFBFBBFFRRR\nBFBFBBBLRR\nFBBFFFFRLR\nBBFFBFBRLL\nFFFBBBBRLR\nFFBFBFBLLR\nFBFBBFBLRL\nFFBFBFBRRR\nBFBFBFFLRL\nBFBFBBBLLL\nFBBBBFFLLL\nFFBBFFBLRL\nBFBBFBBLRR\nFFFBBBBRLL\nBFFBFFFLLL\nFFBFFFFLLR\nBBFFFBFLRL\nFBBBBBFLLL\nFBBFBFBRRR\nBFFBFBBLLR\nFBFFBFFRLL\nFFFBBFBRRL\nFBFFFBBLRR\nFFFBFBFRLL\nFBFBBBBLRR\nFBFBFFBLRL\nFBBFBBFLRL\nBBFFBBBLLR\nFFBBBBBLLR\nBFFFFFFRLL\nFFBBFBBLRL\nBFFBFBBLRR\nBFFFFFFLRL\nFBFFBFBRRR\nBFBBBFFRRR\nFFBFBBBRLR\nFFBFFFBRRR\nFBFBFBFRRL\nFBFBFBBRRL\nBFFFFFFLLL\nFFBFBBFRRL\nBBFFFBFLLR\nFBFFBBBLLR\nFBFBFBFLRL\nBBFFBFBRRL\nFBFFFFBRRR\nBFBFFFBRLL\nBFBBFFBLLR\nBFFFBFBRLL\nFFBBBBFLLR\nBFBBBFBLLL\nFBBFBBFRRR\nBFFBBBBLLR\nFFBBBFBRRR\nFBBFFBBRLR\nFBFFFFFLLR\nFBFFFFBRLR\nFBBFFFFLRR\nFFBBFBFRLL\nBFBBBBBLLL\nBFBBBFBRLL\nFFBBFBFLRL\nFBBBBBBRRL\nBBFFBFBLLL\nBFFBBFFRLR\nFFFBBBFLRR\nBBFFFFBRLR\nBBFFBFBRRR\nBFBFFBFRRR\nBFBFFFFRRR\nFFBFBBFLRR\nBBFFBFFRLL\nBFBFFFFRLL\nBFBBBFBRLR\nFBFFFBBLLL\nFBFFFBBRRR\nBFBFFBBLLL\nFFBBBFFLLL\nFFBFFBBLLL\nFFFBBFBRRR\nFBFBFFBLLR\nFFBBBFFRRL\nFBBFFFFLLL\nBBFFFFFLRL\nBFBBBBFRRL\nFFBBBFFRLL\nFBBBBBFRRR\nFBFFBFFLLR\nBBFFBBFLRL\nFFFBBBFRRR\nBFFFBFBLRL\nBFBFBFFLLL\nFBFBFBBRRR\nFBBBBBFRLR\nBFFBBBBRRL\nFBFFBFBRRL\nBFFBBFBRRL\nBFBBFFBLRL\nFBBBFFFRRL\nBBFFFFFRLR\nFFBFFBFLLL\nFBBFBBFLRR\nFBBBFBFLLR\nBFFFFBBLLR\nFBBFFBBRLL\nFFFBBFBRLL\nFFFBBBBLRR\nFBBBBFBRLL\nFBFFFBBRLL\nFFBBBBFRRL\nFBFFFFFLLL\nFBBFFFFRRL\nBFFFBBBRRL\nFBFBFFFRLL\nFBBFBFBRRL\nFBBFFBFLLL\nFBBBFBFLRR\nFFBBBFFRLR\nFFFBFFBRLL\nFFFBBFFRRL\nFBFFBFBLLR\nFBFBBFFRLL\nFBFBBFFLRR\nBFBBFFFRRR\nFBBBFFBLLR\nFBFFFFBLRL\nFBBFBFFLLR\nFFBFFBFRRR\nFBFFBBBRRL\nBFBFFBBLRL\nBFFBBFBRRR\nFFFBBFBLRL\nBFBFBBBRRL\nFFFBBFBLRR\nBFFBBFFLRL\nBFBBFFFLRR\nFBFBFBBLLR\nBFFBFFFRRL\nFFBBFFFRLR\nBFFBBBBRLL\nBBFFBFFLRR\nBBFFBFBLRR\nFFBFFFFRLL\nFFBFBFFRLR\nBFFBBFBLLL\nFBBBFBBRLL\nFBFFFBFRRL\nFBFBBFFRLR\nFBFBBFBLRR\nBFFBFBFRRR\nBFBBBFFRLL\nBFBFFBFRLR\nBFFBFFFLRR\nBFFBBBFRLL\nBFFBFFFRLL"));
// BFFFBBFRRR: row 70, column 7, seat ID 567.
// FFFBBBFRRR: row 14, column 7, seat ID 119.
// BBFFBBFRLL: row 102, column 4, seat ID 820.
//# sourceMappingURL=binary-boarding.js.map