"use strict";
function findNiceStrings(input) {
    var rules = {
        vowels: ['a', 'e', 'i', 'o', 'u'],
        forbidden: ['ab', 'cd', 'pq', 'xy'],
    };
    var niceStringCount = 0;
    input.split('\n').forEach(function (string) {
        var hasEnoughVowels = includesEnoughVowels(string, rules.vowels);
        var hasDouble = includesDouble(string);
        var hasForbidden = rules.forbidden.some(function (s) { return string.includes(s); });
        var isNice = hasEnoughVowels && hasDouble && !hasForbidden;
        if (isNice)
            niceStringCount++;
    });
    return niceStringCount;
}
function includesDouble(string) {
    var includesDouble = false;
    for (var i = 1; i < string.length; i++) {
        if (string[i] == string[i - 1]) {
            includesDouble = true;
            break;
        }
    }
    return includesDouble;
}
function includesEnoughVowels(string, allowedVowels) {
    var vowelCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (allowedVowels.includes(string[i])) {
            vowelCount++;
        }
        if (vowelCount == 3)
            break;
    }
    return vowelCount == 3;
}
//# sourceMappingURL=nicestring.js.map