function findNiceStrings(input: string) {
    const rules = {
        vowels: ['a', 'e', 'i', 'o', 'u'],
        forbidden: ['ab', 'cd', 'pq', 'xy'],
    };

    let niceStringCount = 0;

    input.split('\n').forEach(string => {
        const hasEnoughVowels = includesEnoughVowels(string, rules.vowels);
        const hasDouble = includesDouble(string);
        const hasForbidden = rules.forbidden.some(s => string.includes(s));
        const isNice = hasEnoughVowels && hasDouble && !hasForbidden;

        if (isNice) niceStringCount++;
    });

    return niceStringCount;
}

function includesDouble(string: string): boolean {
    let includesDouble = false;

    for (let i = 1; i < string.length; i++) {
        if (string[i] == string[i - 1]) {
            includesDouble = true;
            break;
        }
    }
    return includesDouble;
}

function includesEnoughVowels(
    string: string,
    allowedVowels: string[],
): boolean {
    let vowelCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (allowedVowels.includes(string[i])) {
            vowelCount++;
        }
        if (vowelCount == 3) break;
    }
    return vowelCount == 3;
}
