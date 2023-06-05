function supplyStacker(input: string): string {
    const [stackInfo, moveInfo] = input.split('\n\n');
    const stack = generateStack(stackInfo);

    if (typeof stack === 'string') return stack;
    // const modifiedStack1 = modifyStackSingle(moveInfo, stack);
    // const crates1 = getTopCrates(modifiedStack1);
    const modifiedStack2 = modifyStackMultiple(moveInfo, stack);
    const crates2 = getTopCrates(modifiedStack2);
    // return crates1;
    return crates2;
}

function generateStack(stackInfo: string): string[][] | string {
    const rows = stackInfo.split('\n');
    const positions: number[] | undefined = rows
        .pop()
        ?.replaceAll('   ', '')
        .trim()
        .split('')
        .map(Number);

    if (positions == undefined) return 'bad input!';
    const posCount = positions[positions.length - 1];
    const stack: string[][] = Array.from(Array(posCount), () => []);
    const tempStack: string[][] = [];

    // Fill a temp array for easy storage
    for (let i = 0; i < posCount - 1; i++) {
        const currentRow = rows[i];
        tempStack[i] = [];

        for (let j = 1; j <= currentRow.length; j += 4) {
            const item = currentRow[j];
            tempStack[i].push(item);
        }
    }

    // Fill the result array correctly by cycling through the temp one
    for (let i = 0; i < tempStack.length; i++) {
        const row = tempStack[i];

        for (let j = 0; j < row.length; j++) {
            const item = row[j];
            if (item !== ' ') stack[j].unshift(item);
        }
    }
    return stack;
}

function modifyStackSingle(moveInfo: string, stack: string[][]): string[][] {
    const rows = moveInfo.split('\n');

    for (let i = 0; i < rows.length; i++) {
        const [, moveCount, , from, , to] = rows[i].split(' ').map(Number);

        for (let j = 0; j < moveCount; j++) {
            const takenBoxes = stack[from - 1].pop() as string;
            stack[to - 1].push(takenBoxes);
        }
    }
    return stack;
}

function modifyStackMultiple(moveInfo: string, stack: string[][]): string[][] {
    const rows = moveInfo.split('\n');

    for (let i = 0; i < rows.length; i++) {
        const [, moveCount, , from, , to] = rows[i].split(' ').map(Number);
        const index = stack[from - 1].length - moveCount;
        const part = stack[from - 1].splice(index);

        stack[to - 1] = [...stack[to - 1], ...part];
    }
    return stack;
}

function getTopCrates(stack: string[][]): string {
    let res = '';
    stack.forEach(r => (res += r[r.length - 1]));
    return res;
}
