function reorganize2(input: string): string {
    const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let prioritySum = 0;

    const backpacks = input.split('\n');

    while (backpacks.length) {
        const [e1, e2, e3] = backpacks.splice(0, 3);
        const [s1, s2, s3] = [e1, e2, e3].map(e => new Set(e));

        for (const i of s1) {
            if (s2.has(i) && s3.has(i)) {
                prioritySum += priorities.indexOf(i) + 1;
            }
        }
    }

    return `Sum of priorities: ${prioritySum}`;
}