interface MBInfo {
    memoryBanks: number[];
    firstSnapshot: string;
}

function main(input: string): void {
    const { memoryBanks, firstSnapshot } = createMemoryBanks(input);
    const snapshots = [firstSnapshot];
    let currentSnapshot = '';
    let iterations = 0;

    while (true) {
        iterations++;
        currentSnapshot = manipulateMemoryBanks(memoryBanks);
        if (snapshots.includes(currentSnapshot)) break;
        snapshots.push(currentSnapshot);
    }
    console.log(currentSnapshot);
    console.log(iterations);
    console.log(new Set(snapshots));
}

function manipulateMemoryBanks(memoryBanks: number[]): string {
    let largest = Math.max(...memoryBanks);
    const memoryBanksL = memoryBanks.length;
    const indexOfLargest = memoryBanks.indexOf(largest);
    let startIndex = indexOfLargest + 1;

    memoryBanks[indexOfLargest] = 0;

    while (largest > 0) {
        if (startIndex === memoryBanksL) startIndex = 0;
        memoryBanks[startIndex++]++;
        largest--;
    }
    return memoryBanks.join('');
}

function createMemoryBanks(input: string): MBInfo {
    const pattern = /[0-9]+/g;
    const memoryBanks = input.match(pattern)?.map(Number) || [];
    return {
        memoryBanks,
        firstSnapshot: memoryBanks?.join('') || '',
    };
}

main('0 2 7 0');
main(`5 1 10 0 1 7 13 14 3 12 8 10 7 12 0 6`);
