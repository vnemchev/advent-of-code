const fs = require('fs');
const path = require('path');

const input = fs
    .readFileSync(path.resolve(__dirname, '../03/input.txt'), 'utf-8')
    .split('\n')
    .map(e => e.trim());

function trajectory(route, right, down) {
    const tree = '#';

    let position = 0,
        treesHit = 0;

    for (let i = 0; i < route.length; i += down) {
        const currentRow = route[i];
        const currentRowL = currentRow.length;
        const mIndex = currentRowL - 1;
        const current = currentRow[position];

        if (current == tree) treesHit += 1;

        if (position > mIndex - right) {
            position -= currentRowL;
        }

        position += right;
    }

    return treesHit;
}

const t1 = trajectory.bind(null, input, 1, 1),
    t2 = trajectory.bind(null, input, 3, 1),
    t3 = trajectory.bind(null, input, 5, 1),
    t4 = trajectory.bind(null, input, 7, 1),
    t5 = trajectory.bind(null, input, 1, 2);

console.log(`${t1() * t2() * t3() * t4() * t5()}`);
