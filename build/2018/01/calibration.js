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
function chronalCalibration(input) {
    var commands = input.split('\n');
    var frequency = 0;
    var frequencies = [frequency];
    return manipulate() || 0;
    function manipulate() {
        var e_1, _a;
        try {
            for (var commands_1 = __values(commands), commands_1_1 = commands_1.next(); !commands_1_1.done; commands_1_1 = commands_1.next()) {
                var command = commands_1_1.value;
                var operator = command[0];
                var value = Number(command.substring(1));
                operator == '+' ? (frequency += value) : (frequency -= value);
                if (!frequencies.includes(frequency))
                    frequencies.push(frequency);
                else
                    return frequency;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (commands_1_1 && !commands_1_1.done && (_a = commands_1.return)) _a.call(commands_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (new Set(frequencies).size == frequencies.length)
            return manipulate();
    }
}
console.log(chronalCalibration("+1\n-2\n+3\n+1"));
console.log(chronalCalibration("-4\n+9\n+6\n+8\n+3\n+14\n+11\n+7\n-12\n+4\n-15\n+2\n-12\n-4\n+15\n-8\n-16\n-4\n+14\n-11\n-19\n-2\n+15\n-4\n-5\n-1\n+15\n-8\n+1\n+10\n+7\n+18\n+1\n+10\n+11\n+17\n-16\n+4\n-12\n+14\n+9\n+6\n+7\n+10\n+14\n+7\n+6\n-3\n+19\n+18\n+4\n+16\n+17\n+11\n+9\n+7\n-8\n-1\n-5\n-12\n-7\n+4\n-5\n+2\n+4\n+3\n+20\n-19\n+18\n+12\n+14\n+5\n-14\n+7\n-19\n-20\n+6\n-3\n+7\n+15\n+12\n+11\n+15\n+2\n+3\n-17\n-18\n+1\n+13\n-3\n+14\n-1\n-8\n-9\n-12\n+15\n-8\n+10\n+11\n+15\n+4\n+6\n+16\n+1\n+3\n+13\n-6\n+14\n-3\n-12\n-12\n+14\n+6\n-10\n+20\n+5\n+18\n+11\n+3\n+17\n+2\n-9\n-17\n-14\n+2\n+9\n+11\n-2\n+14\n+5\n-7\n+18\n-6\n-9\n-9\n-10\n-12\n-16\n-1\n+14\n-15\n-9\n-2\n-6\n-11\n-14\n-11\n-19\n+11\n-12\n-18\n-5\n+11\n+18\n+17\n-5\n-19\n+14\n+11\n-2\n-14\n+17\n+8\n+3\n+12\n-9\n+1\n+23\n+7\n-12\n+24\n+10\n-2\n+6\n+20\n-16\n-17\n+19\n-7\n+11\n+14\n+21\n-18\n+1\n+4\n+8\n-2\n-5\n-12\n-13\n+7\n+19\n+2\n+8\n+9\n+8\n+2\n+17\n+15\n+18\n+18\n+18\n-2\n-13\n-18\n-12\n-1\n+17\n-14\n-15\n+8\n+20\n+9\n-7\n+11\n-15\n-16\n-11\n-9\n+11\n+19\n+15\n+4\n+15\n+9\n-3\n+5\n-18\n+6\n+17\n+15\n-8\n-13\n+16\n+8\n+17\n+2\n+18\n+2\n+2\n+4\n-10\n+11\n-3\n+8\n+2\n+3\n-12\n+6\n+12\n-1\n+21\n-13\n-17\n-10\n+13\n-6\n-18\n-4\n-6\n-5\n+18\n-20\n-6\n-7\n-17\n-6\n-18\n+9\n+16\n+14\n+10\n+16\n+1\n-4\n+1\n+15\n-9\n-5\n-4\n-7\n-7\n-1\n+13\n-15\n-1\n-22\n-19\n+10\n-8\n-5\n+16\n-12\n+17\n+7\n+4\n-7\n+4\n+6\n+5\n-2\n-1\n+20\n-8\n-3\n+7\n-47\n-10\n+19\n-27\n-3\n+13\n-26\n+1\n+8\n-30\n-14\n+3\n+17\n-16\n-2\n-11\n+14\n-8\n-7\n-10\n-8\n+20\n+23\n+26\n+12\n-25\n-88\n+4\n+1\n-29\n-5\n+16\n-19\n+15\n+19\n-27\n-8\n-18\n-9\n-12\n-10\n+14\n-13\n-14\n-10\n-21\n-14\n+6\n-1\n+21\n+14\n+6\n+21\n-2\n+17\n+20\n-5\n+17\n-4\n-14\n-9\n-11\n-14\n+17\n+20\n+10\n+20\n-80\n+15\n-27\n-42\n+7\n-18\n+14\n-4\n-16\n-3\n+10\n-8\n-25\n-14\n-3\n+24\n+3\n+18\n-35\n+54\n+29\n-35\n+63\n+4\n-119\n-24\n-57508\n+1\n-10\n-10\n-17\n-8\n-9\n+4\n-7\n+19\n+2\n+19\n+8\n-16\n-19\n-2\n+5\n+2\n+10\n+11\n-6\n-18\n+11\n-17\n-17\n+12\n+4\n-2\n-17\n-5\n+7\n-18\n-14\n-3\n-18\n-16\n+18\n-1\n-10\n-8\n-13\n+12\n-4\n-9\n+6\n+11\n-5\n+9\n+13\n+16\n+15\n-5\n+10\n+13\n-19\n-16\n-13\n+5\n-12\n+8\n+1\n+14\n+23\n-1\n+17\n-15\n-19\n-9\n+8\n-2\n+19\n-13\n-15\n+2\n+12\n-15\n-16\n-20\n-2\n+14\n+6\n-1\n-1\n-3\n-9\n-3\n-15\n+6\n+4\n-8\n+9\n-14\n-10\n+9\n-15\n-16\n-3\n-18\n-9\n+18\n-8\n-16\n-18\n+14\n+17\n+9\n+12\n-7\n+2\n+15\n+12\n-7\n-11\n+13\n+8\n+5\n+2\n+10\n-19\n-12\n-20\n+10\n+7\n+19\n-8\n-7\n+19\n-18\n-15\n-9\n-12\n-18\n+2\n+12\n+10\n-5\n+7\n-15\n+1\n-11\n-18\n-8\n-16\n-16\n+13\n-19\n-10\n-5\n-5\n-18\n+13\n+3\n+16\n+17\n+15\n+19\n-11\n+15\n-12\n+2\n+17\n+17\n-16\n-15\n+5\n+20\n-12\n+5\n+2\n+7\n+15\n-6\n-17\n+18\n-20\n-8\n-15\n-18\n-1\n-20\n-5\n+18\n-11\n-15\n+2\n-15\n-15\n+8\n-18\n+1\n+1\n+5\n+5\n+11\n+5\n+15\n+16\n+19\n-4\n-7\n-5\n+8\n-2\n-19\n+7\n-6\n+19\n+17\n+9\n+2\n+1\n-15\n-2\n-6\n-12\n+19\n-16\n-9\n+4\n-3\n+21\n+6\n+27\n+14\n-22\n+18\n+12\n+18\n+13\n-10\n+8\n-13\n-6\n+10\n-12\n-17\n-38\n+21\n-19\n+18\n-23\n-7\n+17\n+8\n+59\n+3\n-19\n+22\n+17\n+15\n+5\n+24\n+13\n+15\n+8\n+18\n-17\n+16\n+16\n+20\n+1\n+7\n-16\n-15\n+2\n-18\n-9\n+1\n+13\n+5\n-17\n+22\n-13\n-21\n-12\n-4\n+20\n-31\n-12\n-34\n+10\n+2\n+20\n+22\n-28\n-19\n-19\n-2\n+133\n+17\n-10\n+18\n-10\n+6\n+20\n-10\n+3\n+11\n+14\n-5\n+3\n+20\n+11\n-9\n-12\n-1\n-3\n-19\n+12\n+14\n+8\n+12\n+2\n+18\n+7\n-19\n+11\n-22\n+13\n-9\n+15\n-13\n+1\n+20\n+14\n-9\n+11\n-18\n+13\n-21\n-20\n-16\n+7\n-14\n+12\n-1\n+8\n-16\n-16\n-13\n+7\n-3\n+19\n-22\n-10\n+6\n+1\n+16\n+4\n-1\n-12\n-16\n-10\n+29\n+8\n+18\n-9\n+11\n+18\n-6\n-2\n+4\n-3\n-8\n-9\n+21\n+13\n-23\n-26\n-22\n-9\n-24\n-11\n+2\n-18\n-42\n+13\n+46\n-96\n-7\n-9\n-131\n-6\n-21\n+11\n-18\n+14\n+28\n-18\n-11\n-18\n-48\n+7\n+69\n+9\n-24\n-15\n+46\n-10\n+137\n-57522\n+5\n+4\n+3\n+16\n-3\n-18\n+3\n-9\n-10\n+11\n+12\n-8\n-18\n-18\n-4\n+18\n+19\n-4\n-19\n-19\n+4\n-15\n+3\n-16\n-2\n+12\n+16\n+9\n+10\n+13\n+1\n+21\n+17\n+18\n+5\n-4\n-2\n+15\n+13\n+2\n+7\n-19\n+1\n-16\n-7\n-10\n+18\n+12\n-21\n-7\n+3\n+16\n+14\n-13\n+17\n+2\n+7\n-2\n-10\n-17\n+9\n-5\n+14\n+13\n+7\n+15\n-13\n+1\n-13\n+16\n-2\n-5\n-7\n+15\n+13\n-8\n-1\n+18\n+16\n-15\n-7\n+11\n+10\n+16\n-12\n+15\n-16\n-14\n+8\n-16\n-4\n-4\n-19\n-17\n-4\n+18\n+1\n+14\n-9\n-15\n+19\n+8\n+19\n+14\n+20\n-14\n+1\n-18\n+4\n-3\n+2\n-20\n+10\n-2\n+1\n-3\n-2\n-3\n+12\n+6\n+6\n+11\n+17\n-7\n+20\n-16\n+5\n+6\n-39\n-26\n-31\n-29\n+2\n-19\n+18\n-6\n-16\n+14\n+4\n-19\n+18\n-14\n-1\n-10\n-4\n-17\n+6\n+17\n+1\n+1\n-12\n+21\n-12\n+16\n-12\n+16\n-27\n+22\n-2\n+30\n+1\n-3\n+7\n+23\n-9\n+20\n+34\n-142\n-7\n+5\n+16\n-23\n-9\n+7\n-2\n+12\n-15\n-4\n-19\n-16\n+15\n+13\n+4\n+4\n-16\n-7\n+10\n+17\n-6\n-15\n+11\n-5\n-8\n-18\n+115524"));
//# sourceMappingURL=calibration.js.map