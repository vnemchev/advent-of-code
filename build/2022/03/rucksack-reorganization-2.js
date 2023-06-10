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
function reorganize2(input) {
    var e_1, _a;
    var priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var prioritySum = 0;
    var backpacks = input.split('\n');
    while (backpacks.length) {
        var _b = __read(backpacks.splice(0, 3), 3), e1 = _b[0], e2 = _b[1], e3 = _b[2];
        var _c = __read([e1, e2, e3].map(function (e) { return new Set(e); }), 3), s1 = _c[0], s2 = _c[1], s3 = _c[2];
        try {
            for (var s1_1 = (e_1 = void 0, __values(s1)), s1_1_1 = s1_1.next(); !s1_1_1.done; s1_1_1 = s1_1.next()) {
                var i = s1_1_1.value;
                if (s2.has(i) && s3.has(i)) {
                    prioritySum += priorities.indexOf(i) + 1;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (s1_1_1 && !s1_1_1.done && (_a = s1_1.return)) _a.call(s1_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return "Sum of priorities: ".concat(prioritySum);
}
//# sourceMappingURL=rucksack-reorganization-2.js.map