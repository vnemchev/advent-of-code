function supplyStacker(input) {
    const [stackInfo, moveInfo] = input.split('\n\n');

    const stack = generateStacks(stackInfo);

    moveItems(moveInfo, stack);
}

function generateStacks(stackInfo) {
    const rows = stackInfo.split('\n');
    const stack = [],
        tempStack = [];

    const positions = rows
        .pop()
        .replaceAll('   ', '')
        .trim()
        .split('')
        .map(Number);

    const posCount = positions[positions.length - 1];

    for (let i = 0; i < posCount; i++) {
        const currentRow = rows[i];

        tempStack[i] = [];
        stack[i] = [];

        for (let j = 1; j <= currentRow.length; j += 4) {
            const item = currentRow[j];
            tempStack[i].push(item);
        }
    }

    for (let i = 0; i < tempStack.length; i++) {
        const row = tempStack[i];

        for (let j = 0; j < row.length; j++) {
            stack[j].unshift(row[j]);
        }
    }

    stack.forEach(e => console.log(e));

    return stack;
}

function moveItems(moveInfo, stack) {
    const rows = moveInfo.split('\n');

    // stack.forEach(s => console.log(s));

    for (let i = 0; i < rows.length; i++) {
        const [, moveCount, , positionFrom, , positionTo] = rows[i].split(' ');

        for (let j = 0; j < moveCount; j++) {
            const currentItem = stack[positionFrom];
            // console.log(currentItem);
        }
    }
}

supplyStacker(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`);
