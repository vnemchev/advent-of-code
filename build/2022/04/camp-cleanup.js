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
function cleanup(pairs) {
    var overlappingPairsCount = 0;
    pairs.split('\n').forEach(function (pair) {
        var _a = __read(pair.split(','), 2), elf1 = _a[0], elf2 = _a[1];
        var _b = __read(elf1.split('-').map(Number), 2), startOne = _b[0], endOne = _b[1];
        var _c = __read(elf2.split('-').map(Number), 2), startTwo = _c[0], endTwo = _c[1];
        var overlapsCompletely = (startOne >= startTwo && endOne <= endTwo) ||
            (startTwo >= startOne && endTwo <= endOne);
        var overlapsPartially = startOne <= endTwo && startTwo <= endOne;
        if (overlapsPartially || overlapsCompletely)
            overlappingPairsCount++;
    });
    return overlappingPairsCount;
}
//# sourceMappingURL=camp-cleanup.js.map