function cleanup(pairs: string): number {
    let overlappingPairsCount = 0;

    pairs.split('\n').forEach(pair => {
        const [elf1, elf2] = pair.split(',');

        const [startOne, endOne] = elf1.split('-').map(Number);
        const [startTwo, endTwo] = elf2.split('-').map(Number);

        const overlapsCompletely =
            (startOne >= startTwo && endOne <= endTwo) ||
            (startTwo >= startOne && endTwo <= endOne);

        const overlapsPartially = startOne <= endTwo && startTwo <= endOne;

        if (overlapsPartially || overlapsCompletely) overlappingPairsCount++;
    });

    return overlappingPairsCount;
}
