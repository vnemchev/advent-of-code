function supplyStacker(input) {
    const [stackInfo, moveInfo] = input.split('\n\n');
    generateStacks(stackInfo);
}

function generateStacks(input) {
    const rows = input.split('\n');

    rows.pop();

    const stack = [];

    for (let i = 0; i < rows.length; i++) {
        stack[i] = [];
    }

    for (let i = 0; i < rows.length; i++) {
        const currentRow = rows[i];

        for (let j = 1; j <= currentRow.length; j += 4) {
            stack[i].push(currentRow[j]);
        }
    }
    
    return stack;
}

supplyStacker(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`);
