"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exampleDirectory = {
    directories: {
        a: {
            directories: {
                e: {
                    files: { i: { size: 584, parent: 'e' } },
                    parent: 'a',
                },
            },
            files: {
                f: { size: 29116, parent: 'a' },
                g: { size: 2557, parent: 'a' },
                'h.lst': { size: 62596, parent: 'a' },
            },
            parent: 'a',
        },
        d: {
            files: {
                j: { size: 4060174, parent: 'd' },
                'd.log': { size: 8033020, parent: 'd' },
                'd.ext': { size: 5626152, parent: 'd' },
                k: { size: 7214296, parent: 'd' },
            },
            parent: 'a',
        },
    },
    files: {
        'b.txt': {
            size: 14848514,
            parent: '/',
        },
        'c.dat': {
            size: 8504156,
            parent: '/',
        },
    },
};
function main(input) {
    console.log(JSON.stringify(exampleDirectory));
    parseInput(input);
}
function parseInput(input) {
    input.split('\n').forEach(function (row, i) {
        if (input[0] == '$') {
        }
        else {
        }
    });
}
main("$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k");
//# sourceMappingURL=space.js.map