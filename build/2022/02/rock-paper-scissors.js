"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
function rps(moveData) {
    var e_1, _a;
    var moveList = moveData.split('\n');
    var rules = {
        A: {
            X: { movePoints: 3, roundPoints: 0 },
            Y: { movePoints: 1, roundPoints: 3 },
            Z: { movePoints: 2, roundPoints: 6 },
        },
        B: {
            X: { movePoints: 1, roundPoints: 0 },
            Y: { movePoints: 2, roundPoints: 3 },
            Z: { movePoints: 3, roundPoints: 6 },
        },
        C: {
            X: { movePoints: 2, roundPoints: 0 },
            Y: { movePoints: 3, roundPoints: 3 },
            Z: { movePoints: 1, roundPoints: 6 },
        },
    };
    var score = 0;
    try {
        for (var moveList_1 = __values(moveList), moveList_1_1 = moveList_1.next(); !moveList_1_1.done; moveList_1_1 = moveList_1.next()) {
            var move = moveList_1_1.value;
            var _b = __read(move.split(' '), 2), enemyMove = _b[0], outcome = _b[1];
            var _c = rules[enemyMove][outcome], movePoints = _c.movePoints, roundPoints = _c.roundPoints;
            score += movePoints + roundPoints;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (moveList_1_1 && !moveList_1_1.done && (_a = moveList_1.return)) _a.call(moveList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return "Total score: ".concat(score);
}
//# sourceMappingURL=rock-paper-scissors.js.map