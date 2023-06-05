function findCalories(dwarfData: string): string {
    const dwarfCollection: number[] = [];

    let dwarfCalories = 0;
    let topThreeCalories = 0;

    dwarfData
        .split('\n')
        .map(Number)
        .forEach(n => {
            if (n === 0) {
                dwarfCollection.push(dwarfCalories);
                dwarfCalories = 0;
            } else {
                dwarfCalories += n;
            }
        });

    dwarfCollection
        .sort((a, b) => b - a)
        .slice(0, 3)
        .forEach(e => (topThreeCalories += e));

    return `
    ----------------------------------
        Top Calories: ${dwarfCollection[0]}
        Top Three Combined: ${topThreeCalories}
    ----------------------------------
    `;
}
