function reorganize1(input: string): string {
    const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const backpacks = input;

    let prioritySum = 0;

    backpacks.split('\n').forEach(b => {
        const c1 = new Set(b.slice(0, b.length / 2).split(''));
        const c2 = new Set(b.slice(b.length / 2).split(''));

        for (const i of c1) {
            if (!c2.has(i)) continue;
            prioritySum += priorities.indexOf(i) + 1;
        }
    });

    return `Sum of priorities: ${prioritySum}`;
}

