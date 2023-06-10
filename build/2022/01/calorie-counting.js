"use strict";
function findCalories(dwarfData) {
    var dwarfCollection = [];
    var dwarfCalories = 0;
    var topThreeCalories = 0;
    dwarfData
        .split('\n')
        .map(Number)
        .forEach(function (n) {
        if (n === 0) {
            dwarfCollection.push(dwarfCalories);
            dwarfCalories = 0;
        }
        else {
            dwarfCalories += n;
        }
    });
    dwarfCollection
        .sort(function (a, b) { return b - a; })
        .slice(0, 3)
        .forEach(function (e) { return (topThreeCalories += e); });
    return "\n    ----------------------------------\n        Top Calories: ".concat(dwarfCollection[0], "\n        Top Three Combined: ").concat(topThreeCalories, "\n    ----------------------------------\n    ");
}
//# sourceMappingURL=calorie-counting.js.map