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
function reorganize1(input) {
    var priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var backpacks = input;
    var prioritySum = 0;
    backpacks.split('\n').forEach(function (b) {
        var e_1, _a;
        var c1 = new Set(b.slice(0, b.length / 2).split(''));
        var c2 = new Set(b.slice(b.length / 2).split(''));
        try {
            for (var c1_1 = __values(c1), c1_1_1 = c1_1.next(); !c1_1_1.done; c1_1_1 = c1_1.next()) {
                var i = c1_1_1.value;
                if (!c2.has(i))
                    continue;
                prioritySum += priorities.indexOf(i) + 1;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (c1_1_1 && !c1_1_1.done && (_a = c1_1.return)) _a.call(c1_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    return "Sum of priorities: ".concat(prioritySum);
}
//# sourceMappingURL=rucksack-reorganization-1.js.map