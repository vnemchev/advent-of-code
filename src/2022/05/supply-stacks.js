function supplyStacker(input) {
    const [stackInfo, moveInfo] = input.split('\n\n');

    const stack = generateStack(stackInfo);

    // const modifiedStack1 = modifyStackSingle(moveInfo, stack);
    const modifiedStack2 = modifyStackMultiple(moveInfo, stack);

    // const crates1 = getTopCrates(modifiedStack1);
    const crates2 = getTopCrates(modifiedStack2);

    // return crates1;
    return crates2;
}

function generateStack(stackInfo) {
    const rows = stackInfo.split('\n');
    const positions = rows
        .pop()
        .replaceAll('   ', '')
        .trim()
        .split('')
        .map(Number);

    const posCount = positions[positions.length - 1];
    const stack = Array.from(Array(posCount), () => []);
    const tempStack = [];

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

function modifyStackSingle(moveInfo, stack) {
    const rows = moveInfo.split('\n');

    for (let i = 0; i < rows.length; i++) {
        const [, moveCount, , from, , to] = rows[i].split(' ').map(Number);

        for (let j = 0; j < moveCount; j++) {
            stack[to - 1].push(stack[from - 1].pop());
        }
    }

    return stack;
}

function modifyStackMultiple(moveInfo, stack) {
    const rows = moveInfo.split('\n');

    for (let i = 0; i < rows.length; i++) {
        const [, moveCount, , from, , to] = rows[i].split(' ').map(Number);
        const index = stack[from - 1].length - moveCount;
        const part = stack[from - 1].splice(index);

        stack[to - 1] = [...stack[to - 1], ...part];
    }

    return stack;
}

function getTopCrates(stack) {
    let res = '';

    stack.forEach(r => (res += r[r.length - 1]));

    return res;
}

console.log(
    supplyStacker(`                [V]     [C]     [M]
[V]     [J]     [N]     [H]     [V]
[R] [F] [N]     [W]     [Z]     [N]
[H] [R] [D]     [Q] [M] [L]     [B]
[B] [C] [H] [V] [R] [C] [G]     [R]
[G] [G] [F] [S] [D] [H] [B] [R] [S]
[D] [N] [S] [D] [H] [G] [J] [J] [G]
[W] [J] [L] [J] [S] [P] [F] [S] [L]
 1   2   3   4   5   6   7   8   9 

move 2 from 2 to 7
move 8 from 5 to 6
move 2 from 4 to 5
move 1 from 4 to 5
move 1 from 5 to 8
move 5 from 9 to 2
move 7 from 1 to 6
move 7 from 3 to 8
move 1 from 4 to 6
move 2 from 5 to 6
move 6 from 7 to 5
move 2 from 2 to 4
move 4 from 5 to 2
move 10 from 8 to 1
move 2 from 7 to 4
move 4 from 2 to 8
move 2 from 9 to 8
move 1 from 8 to 4
move 2 from 4 to 9
move 5 from 8 to 2
move 1 from 4 to 6
move 1 from 8 to 9
move 1 from 7 to 2
move 2 from 4 to 2
move 1 from 7 to 3
move 13 from 2 to 1
move 1 from 2 to 4
move 1 from 2 to 3
move 2 from 5 to 4
move 17 from 6 to 4
move 3 from 4 to 9
move 14 from 1 to 4
move 4 from 6 to 8
move 1 from 9 to 8
move 23 from 4 to 8
move 6 from 1 to 7
move 3 from 1 to 5
move 1 from 3 to 8
move 5 from 7 to 8
move 1 from 3 to 4
move 1 from 5 to 3
move 1 from 5 to 1
move 1 from 3 to 2
move 1 from 9 to 4
move 9 from 4 to 9
move 1 from 1 to 2
move 11 from 8 to 2
move 1 from 4 to 5
move 13 from 2 to 3
move 7 from 9 to 6
move 1 from 5 to 6
move 1 from 5 to 2
move 1 from 9 to 4
move 1 from 4 to 9
move 2 from 8 to 9
move 1 from 7 to 8
move 8 from 9 to 1
move 8 from 1 to 4
move 4 from 6 to 7
move 1 from 9 to 4
move 2 from 3 to 9
move 1 from 9 to 1
move 6 from 4 to 1
move 2 from 1 to 3
move 22 from 8 to 6
move 1 from 2 to 5
move 3 from 7 to 8
move 15 from 6 to 4
move 7 from 3 to 7
move 4 from 6 to 9
move 2 from 9 to 2
move 6 from 3 to 5
move 3 from 9 to 5
move 5 from 5 to 8
move 1 from 2 to 1
move 6 from 8 to 2
move 1 from 1 to 2
move 3 from 5 to 3
move 1 from 7 to 2
move 4 from 7 to 8
move 4 from 6 to 1
move 1 from 5 to 1
move 4 from 8 to 7
move 2 from 3 to 2
move 1 from 1 to 3
move 15 from 4 to 2
move 3 from 7 to 3
move 4 from 7 to 2
move 1 from 4 to 9
move 5 from 3 to 8
move 29 from 2 to 1
move 1 from 9 to 5
move 1 from 2 to 1
move 11 from 1 to 5
move 1 from 4 to 5
move 2 from 6 to 3
move 1 from 3 to 4
move 16 from 1 to 9
move 4 from 8 to 4
move 3 from 6 to 9
move 1 from 3 to 7
move 1 from 7 to 3
move 6 from 1 to 6
move 3 from 4 to 3
move 3 from 8 to 5
move 3 from 1 to 8
move 3 from 1 to 4
move 2 from 4 to 9
move 3 from 6 to 3
move 15 from 5 to 2
move 3 from 2 to 3
move 4 from 2 to 7
move 2 from 5 to 9
move 10 from 3 to 6
move 11 from 9 to 5
move 2 from 4 to 9
move 8 from 9 to 4
move 1 from 9 to 6
move 7 from 4 to 6
move 3 from 5 to 8
move 22 from 6 to 9
move 4 from 7 to 8
move 8 from 5 to 8
move 2 from 4 to 3
move 1 from 8 to 1
move 17 from 8 to 3
move 3 from 3 to 4
move 13 from 3 to 9
move 20 from 9 to 7
move 2 from 2 to 9
move 19 from 9 to 5
move 1 from 1 to 4
move 3 from 2 to 7
move 4 from 4 to 3
move 1 from 9 to 8
move 18 from 5 to 1
move 1 from 9 to 4
move 1 from 9 to 7
move 2 from 4 to 8
move 1 from 5 to 4
move 3 from 2 to 7
move 3 from 3 to 1
move 2 from 1 to 3
move 3 from 3 to 8
move 1 from 4 to 8
move 6 from 8 to 2
move 1 from 3 to 9
move 1 from 3 to 9
move 10 from 1 to 9
move 7 from 1 to 7
move 4 from 7 to 4
move 29 from 7 to 3
move 6 from 2 to 9
move 25 from 3 to 6
move 5 from 3 to 9
move 13 from 6 to 9
move 12 from 6 to 2
move 1 from 8 to 9
move 10 from 2 to 6
move 7 from 6 to 5
move 20 from 9 to 3
move 11 from 3 to 6
move 1 from 7 to 9
move 2 from 2 to 9
move 19 from 9 to 2
move 14 from 6 to 8
move 4 from 5 to 2
move 2 from 4 to 6
move 3 from 5 to 1
move 13 from 8 to 5
move 1 from 6 to 1
move 2 from 4 to 2
move 8 from 2 to 4
move 6 from 4 to 7
move 1 from 9 to 8
move 2 from 4 to 7
move 5 from 2 to 4
move 4 from 4 to 2
move 10 from 5 to 6
move 1 from 1 to 7
move 1 from 5 to 4
move 1 from 4 to 9
move 4 from 7 to 8
move 5 from 1 to 7
move 1 from 9 to 7
move 7 from 3 to 2
move 2 from 5 to 2
move 8 from 6 to 9
move 1 from 4 to 6
move 3 from 7 to 4
move 5 from 9 to 7
move 2 from 4 to 3
move 20 from 2 to 4
move 2 from 4 to 8
move 14 from 4 to 2
move 12 from 7 to 4
move 8 from 2 to 1
move 10 from 2 to 4
move 6 from 8 to 5
move 1 from 7 to 8
move 4 from 4 to 3
move 1 from 3 to 9
move 1 from 2 to 7
move 1 from 6 to 8
move 5 from 3 to 5
move 1 from 3 to 2
move 7 from 4 to 5
move 6 from 1 to 7
move 5 from 7 to 6
move 1 from 6 to 5
move 2 from 7 to 8
move 1 from 2 to 6
move 2 from 8 to 2
move 5 from 5 to 7
move 6 from 6 to 8
move 16 from 4 to 9
move 16 from 9 to 4
move 11 from 5 to 4
move 5 from 8 to 3
move 2 from 5 to 2
move 14 from 4 to 2
move 1 from 6 to 3
move 1 from 6 to 9
move 1 from 5 to 3
move 3 from 8 to 2
move 10 from 4 to 7
move 5 from 9 to 2
move 3 from 4 to 7
move 1 from 1 to 4
move 3 from 2 to 5
move 2 from 3 to 7
move 1 from 4 to 2
move 18 from 2 to 8
move 3 from 8 to 4
move 5 from 3 to 1
move 1 from 3 to 9
move 1 from 9 to 3
move 8 from 8 to 7
move 2 from 5 to 4
move 1 from 5 to 6
move 1 from 2 to 5
move 1 from 5 to 8
move 1 from 6 to 9
move 3 from 2 to 7
move 27 from 7 to 4
move 2 from 2 to 4
move 4 from 8 to 4
move 1 from 9 to 8
move 3 from 1 to 6
move 1 from 3 to 5
move 3 from 8 to 3
move 1 from 1 to 4
move 1 from 8 to 1
move 3 from 1 to 4
move 2 from 8 to 2
move 2 from 6 to 2
move 8 from 4 to 9
move 1 from 7 to 1
move 1 from 5 to 4
move 1 from 7 to 3
move 4 from 2 to 7
move 1 from 8 to 6
move 8 from 9 to 7
move 1 from 6 to 3
move 3 from 3 to 4
move 37 from 4 to 1
move 1 from 4 to 5
move 13 from 7 to 8
move 6 from 8 to 4
move 5 from 8 to 3
move 1 from 7 to 6
move 4 from 1 to 5
move 1 from 6 to 5
move 2 from 8 to 4
move 32 from 1 to 5
move 1 from 1 to 4
move 5 from 3 to 5
move 1 from 3 to 2
move 1 from 2 to 9
move 19 from 5 to 2
move 1 from 9 to 1
move 16 from 5 to 1
move 7 from 5 to 6
move 1 from 3 to 1
move 11 from 1 to 2
move 18 from 2 to 4
move 1 from 5 to 9
move 8 from 6 to 1
move 10 from 2 to 6
move 7 from 4 to 9
move 2 from 2 to 1
move 7 from 4 to 2
move 5 from 4 to 5
move 2 from 9 to 6
move 9 from 6 to 3
move 5 from 5 to 3
move 8 from 4 to 9
move 7 from 9 to 8
move 4 from 2 to 9
move 10 from 3 to 1
move 6 from 8 to 1
move 2 from 6 to 3
move 5 from 3 to 8
move 3 from 2 to 7
move 1 from 9 to 5
move 1 from 3 to 5
move 2 from 7 to 8
move 1 from 8 to 9
move 1 from 6 to 1
move 23 from 1 to 4
move 2 from 5 to 3
move 1 from 8 to 2
move 2 from 8 to 5
move 2 from 5 to 6
move 1 from 2 to 7
move 1 from 7 to 5
move 4 from 9 to 7
move 1 from 7 to 5
move 1 from 3 to 6
move 3 from 7 to 4
move 1 from 3 to 8
move 1 from 4 to 6
move 6 from 1 to 8
move 4 from 6 to 4
move 2 from 9 to 1
move 1 from 5 to 1
move 19 from 4 to 2
move 2 from 9 to 3
move 1 from 9 to 3
move 9 from 1 to 8
move 1 from 5 to 8
move 1 from 9 to 3
move 2 from 3 to 9
move 3 from 8 to 4
move 1 from 4 to 9
move 1 from 9 to 5
move 2 from 3 to 4
move 6 from 4 to 7
move 3 from 9 to 5
move 4 from 4 to 7
move 1 from 5 to 6
move 18 from 2 to 7
move 13 from 7 to 9
move 3 from 5 to 1
move 1 from 2 to 1
move 1 from 6 to 5
move 3 from 1 to 7
move 1 from 1 to 5
move 7 from 9 to 6
move 8 from 7 to 4
move 11 from 7 to 6
move 5 from 9 to 2
move 17 from 6 to 1
move 2 from 5 to 1
move 11 from 8 to 1
move 20 from 1 to 2
move 3 from 8 to 1
move 1 from 9 to 8
move 1 from 6 to 1
move 11 from 1 to 7
move 18 from 2 to 3
move 12 from 4 to 8
move 11 from 7 to 3
move 7 from 2 to 3
move 2 from 1 to 5
move 1 from 1 to 3
move 1 from 8 to 1
move 1 from 5 to 9
move 1 from 9 to 6
move 1 from 8 to 7
move 1 from 5 to 3
move 1 from 6 to 7
move 2 from 8 to 1
move 8 from 3 to 2
move 7 from 2 to 9
move 6 from 8 to 6
move 1 from 9 to 3
move 2 from 6 to 4
move 5 from 9 to 6
move 7 from 6 to 2
move 8 from 2 to 9
move 2 from 1 to 9
move 2 from 7 to 2
move 2 from 4 to 8
move 1 from 2 to 7
move 25 from 3 to 7
move 7 from 9 to 7
move 1 from 2 to 5
move 1 from 1 to 4
move 3 from 8 to 1
move 3 from 1 to 8
move 3 from 7 to 8
move 15 from 7 to 3
move 10 from 8 to 3
move 1 from 5 to 7
move 1 from 8 to 5
move 3 from 9 to 2
move 1 from 6 to 4
move 2 from 2 to 7
move 1 from 2 to 5
move 14 from 7 to 9
move 1 from 6 to 2
move 1 from 7 to 1
move 1 from 5 to 4
move 3 from 4 to 3
move 1 from 7 to 6
move 1 from 2 to 7
move 1 from 1 to 2
move 3 from 9 to 1
move 1 from 6 to 2
move 2 from 2 to 6
move 17 from 3 to 6
move 1 from 8 to 3
move 1 from 5 to 4
move 2 from 7 to 2
move 9 from 9 to 8
move 1 from 9 to 3
move 16 from 3 to 2
move 1 from 7 to 5
move 5 from 6 to 5
move 1 from 1 to 6
move 1 from 4 to 1
move 1 from 9 to 3
move 9 from 8 to 6
move 3 from 1 to 5
move 1 from 9 to 1
move 16 from 2 to 1
move 2 from 2 to 7
move 2 from 3 to 9
move 2 from 7 to 4
move 2 from 9 to 3
move 3 from 3 to 5
move 1 from 4 to 5
move 1 from 4 to 2
move 1 from 1 to 7
move 1 from 7 to 1
move 1 from 3 to 6
move 2 from 5 to 1
move 3 from 6 to 2
move 2 from 5 to 8
move 8 from 5 to 4
move 1 from 5 to 3
move 1 from 3 to 2
move 1 from 8 to 3
move 1 from 3 to 8
move 4 from 1 to 7
move 9 from 1 to 7
move 6 from 1 to 8
move 3 from 7 to 4
move 7 from 6 to 7
move 11 from 4 to 3
move 2 from 3 to 8
move 8 from 3 to 8
move 4 from 6 to 1
move 1 from 7 to 4
move 2 from 1 to 2
move 8 from 7 to 2
move 1 from 4 to 8
move 10 from 8 to 2
move 2 from 6 to 1
move 1 from 1 to 4
move 1 from 4 to 8
move 2 from 1 to 4
move 6 from 6 to 5
move 1 from 1 to 9
move 2 from 6 to 8
move 1 from 4 to 5
move 1 from 6 to 9
move 4 from 8 to 9
move 1 from 7 to 1
move 6 from 8 to 6
move 1 from 6 to 1
move 1 from 4 to 9
move 2 from 9 to 5
move 5 from 5 to 9
move 8 from 9 to 5
move 2 from 8 to 5
move 3 from 6 to 9
move 8 from 5 to 7
move 5 from 5 to 6
move 1 from 9 to 2
move 1 from 3 to 1
move 1 from 6 to 7
move 1 from 5 to 6
move 24 from 2 to 4
move 3 from 9 to 7
move 16 from 4 to 5
move 2 from 1 to 3
move 12 from 5 to 6
move 1 from 9 to 5
move 4 from 5 to 9
move 1 from 1 to 6
move 1 from 5 to 2
move 2 from 9 to 8
move 1 from 8 to 1
move 5 from 4 to 5
move 2 from 3 to 5
move 1 from 8 to 3
move 1 from 1 to 6
move 3 from 5 to 7
move 1 from 9 to 1
move 1 from 2 to 8`),
);
