const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(
    path.resolve(__dirname, '../06/input.txt'),
    'utf-8',
);

function signalFinder(input) {
    for (let i = 3; i < input.length; i++) {
        const lastFour = input.substring(i - 3, i + 1);

        if (allUnique(lastFour)) {
            return console.log(i + 1);
        }
    }
}

function allUnique(string) {
    return new Set(string).size === string.length;
}

signalFinder('bvwbjplbgvbhsrlpgdmjqwftvncz');
// first marker after character 5

signalFinder('nppdvjthqldpwncqszvftbrmjlhg');
// first marker after character 6

signalFinder('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg');
// first marker after character 10

signalFinder('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw');
// first marker after character 11

signalFinder(input);

