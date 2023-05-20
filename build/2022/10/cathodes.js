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
function rayTube(input) {
    var e_1, _a;
    var commands = input.split('\n');
    var register = 1, loopCount = 0;
    try {
        for (var commands_1 = __values(commands), commands_1_1 = commands_1.next(); !commands_1_1.done; commands_1_1 = commands_1.next()) {
            var command = commands_1_1.value;
            var _b = __read(command.split(' '), 2), cd = _b[0], number = _b[1];
            // number = Number(number);
            if (cd !== 'noop') {
                loopCount++;
                console.log(loopCount + '. - ' + register);
                register += +number;
                loopCount++;
            }
            else {
                loopCount++;
            }
            console.log('----------');
            console.log(loopCount + '. - ' + register);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (commands_1_1 && !commands_1_1.done && (_a = commands_1.return)) _a.call(commands_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    console.log("\n    ".concat(loopCount, "\n    ").concat(register, "\n    "));
}
rayTube("noop\naddx 3\naddx -5");
