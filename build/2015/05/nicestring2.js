"use strict";
function findNiceStrings2(input) {
    var niceStringCount = 0;
    input.split('\n').forEach(function (string) {
        var hasEqual = includesTwoEqual(string);
        var hasIndirectEqual = includesEqualIndirectly(string);
        var isNice = hasEqual && hasIndirectEqual;
        if (isNice)
            niceStringCount++;
    });
    return niceStringCount;
}
function includesTwoEqual(string) {
    var strArray = string.split('');
    var matchIndexes = [];
    for (var i = 0; i < strArray.length; i++) {
        var substr = strArray[i] + strArray[i + 1];
        var restOfString = strArray.slice(i + 2).join('');
        if (restOfString.includes(substr)) {
            matchIndexes.push(i);
        }
    }
    return matchIndexes.length >= 1;
}
function includesEqualIndirectly(string) {
    var matchIndexes = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] == string[i + 2]) {
            matchIndexes.push(i);
        }
    }
    return matchIndexes.length >= 1;
}
//# sourceMappingURL=nicestring2.js.map