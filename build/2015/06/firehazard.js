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
function findLitLights(input) {
    var grid = createLightsGrid();
    input.split('\n').forEach(function (row) {
        var commandInfo = parseCommands(row);
        var manipulatedGrid = manipulateGrid(grid, commandInfo);
        grid = __spreadArray([], __read(manipulatedGrid), false);
    });
    var litLights = findOnlyLit(grid);
    var totalBrightness = findTotalBrightness(grid);
    return { litLights: litLights, totalBrightness: totalBrightness };
}
function createLightsGrid() {
    return Array.from(Array(1000)).map(function (e) { return (e = Array.from(Array(1000)).map(function (e) { return (e = 0); })); });
}
function parseCommands(row) {
    var pattern = /[0-9]*,[0-9]*/g;
    var coordinates = row.match(pattern) || [];
    var _a = __read(coordinates, 2), from = _a[0], to = _a[1];
    var _b = __read(from.split(',').map(Number), 2), startY = _b[0], startX = _b[1];
    var _c = __read(to.split(',').map(Number), 2), endY = _c[0], endX = _c[1];
    var splitRow = row.split(' ');
    var command = '';
    splitRow[0] == 'toggle'
        ? (command = splitRow[0])
        : (command = splitRow.slice(0, 2).join(' '));
    return { command: command, startX: startX, endX: endX, startY: startY, endY: endY };
}
function manipulateGrid(grid, _a) {
    var command = _a.command, startX = _a.startX, endX = _a.endX, startY = _a.startY, endY = _a.endY;
    for (var i = startY; i <= endY; i++) {
        for (var j = startX; j <= endX; j++) {
            if (command == 'turn on')
                grid[i][j]++;
            // grid[i][j] = 1;
            else if (command == 'turn off' && grid[i][j] > 0)
                grid[i][j]--;
            // grid[i][j] = 0;
            else if (command == 'toggle')
                grid[i][j] += 2;
            // grid[i][j] == 1 ? (grid[i][j] = 0) : (grid[i][j] = 1);
        }
    }
    return grid;
}
function findOnlyLit(grid) {
    var litLights = 0;
    var rowsWithLit = grid.filter(function (r) { return r.includes(1); });
    rowsWithLit.forEach(function (r) {
        var litLightsInRow = r.filter(function (l) { return l == 1; });
        litLightsInRow.forEach(function (l) { return litLights++; });
    });
    return litLights;
}
function findTotalBrightness(grid) {
    var totalBrightness = 0;
    grid.forEach(function (r) {
        r.forEach(function (l) {
            if (l != 0)
                totalBrightness += l;
        });
    });
    return totalBrightness;
}
//# sourceMappingURL=firehazard.js.map