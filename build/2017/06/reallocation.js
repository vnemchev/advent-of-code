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
function main(input) {
    var _a = createMemoryBanks(input), memoryBanks = _a.memoryBanks, firstSnapshot = _a.firstSnapshot;
    var snapshots = [firstSnapshot];
    var currentSnapshot = '';
    var iterations = 0;
    while (true) {
        iterations++;
        currentSnapshot = manipulateMemoryBanks(memoryBanks);
        if (snapshots.includes(currentSnapshot))
            break;
        snapshots.push(currentSnapshot);
    }
    console.log(currentSnapshot);
    console.log(iterations);
    console.log(new Set(snapshots));
}
function manipulateMemoryBanks(memoryBanks) {
    var largest = Math.max.apply(Math, __spreadArray([], __read(memoryBanks), false));
    var memoryBanksL = memoryBanks.length;
    var indexOfLargest = memoryBanks.indexOf(largest);
    var startIndex = indexOfLargest + 1;
    memoryBanks[indexOfLargest] = 0;
    while (largest > 0) {
        if (startIndex === memoryBanksL)
            startIndex = 0;
        memoryBanks[startIndex++]++;
        largest--;
    }
    return memoryBanks.join('');
}
function createMemoryBanks(input) {
    var _a;
    var pattern = /[0-9]+/g;
    var memoryBanks = ((_a = input.match(pattern)) === null || _a === void 0 ? void 0 : _a.map(Number)) || [];
    return {
        memoryBanks: memoryBanks,
        firstSnapshot: (memoryBanks === null || memoryBanks === void 0 ? void 0 : memoryBanks.join('')) || '',
    };
}
main('0 2 7 0');
main("5 1 10 0 1 7 13 14 3 12 8 10 7 12 0 6");
//# sourceMappingURL=reallocation.js.map