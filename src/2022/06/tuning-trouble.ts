function signalFinder(input: string): number | void {
    // for (let i = 3; i < input.length; i++) {
    for (let i = 13; i < input.length; i++) {
        // const lastFour = input.substring(i - 3, i + 1);
        const lastThirteen = input.substring(i - 13, i + 1);

        // if (allUnique(lastFour)) {
        if (allUnique(lastThirteen)) {
            return i + 1;
        }
    }
}

function allUnique(string: string): boolean {
    return new Set(string).size === string.length;
}
