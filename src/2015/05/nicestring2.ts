function findNiceStrings2(input: string) {
    let niceStringCount = 0;

    input.split('\n').forEach(string => {
        const hasEqual = includesTwoEqual(string);
        const hasIndirectEqual = includesEqualIndirectly(string);
        const isNice = hasEqual && hasIndirectEqual;

        if (isNice) niceStringCount++;
    });

    return niceStringCount;
}

function includesTwoEqual(string: string) {
    let strArray = string.split('');
    let i = 0;
    const matchIndexes: number[] = [];

    for (let i = 0; i < strArray.length; i++) {
        const substr = strArray[i] + strArray[i + 1];
        const restOfString = strArray.slice(i + 2).join('');

        if (restOfString.includes(substr)) {
            matchIndexes.push(i);
        }
    }
    return matchIndexes.length >= 1;

}

function includesEqualIndirectly(string: string): boolean {
    const matchIndexes: number[] = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i + 2]) {
            matchIndexes.push(i);
        }
    }
    return matchIndexes.length >= 1;
}