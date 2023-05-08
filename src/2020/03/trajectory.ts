// Will leave these imports here for now as input is super big and ugly.
const fs = require('fs')
const path = require('path')

const input = fs
    .readFileSync(path.resolve(__dirname, '../03/input.txt'), 'utf-8')
    .split('\n')
    .map((e: string) => e.trim());

function findTrajectory(route: string[], right: number, down: number): number {
    const tree = '#';
    const routeL = route.length;

    let position = 0,
        treesHit = 0;

    for (let i = 0; i < routeL; i += down) {
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

const t1 = findTrajectory.bind(null, input, 1, 1),
    t2 = findTrajectory.bind(null, input, 3, 1),
    t3 = findTrajectory.bind(null, input, 5, 1),
    t4 = findTrajectory.bind(null, input, 7, 1),
    t5 = findTrajectory.bind(null, input, 1, 2);

console.log(`${t1() * t2() * t3() * t4() * t5()}`);
