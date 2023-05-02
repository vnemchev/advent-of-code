const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(
    path.resolve(__dirname, '../06/input.txt'),
    'utf-8',
);

function signalFinder(input) {
// for (let i = 3; i < input.length; i++) {
    for (let i = 13; i < input.length; i++) {

        // const lastFour = input.substring(i - 3, i + 1);
        const lastThirteen = input.substring(i - 13, i + 1);

        // if (allUnique(lastFour)) {
        if (allUnique(lastThirteen)) {
            return console.log(i + 1);
        }
    }
}

function allUnique(string) {
    return new Set(string).size === string.length;
}

signalFinder(input);
