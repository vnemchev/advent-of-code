"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function main(input) {
    var commands = input.split('\n');
    treeCreator(commands);
}
function treeCreator(commands) {
    var fileTree = {};
    commands.forEach(function (row, i) {
        if (input[0] == '$') {
            var _a = __read(row.split(' '), 3), dollar = _a[0], command = _a[1], dir = _a[2];
            if (command == 'ls') {
                // TODO: Implement listing command
            }
            else if (command == 'cd') {
                // TODO: Implement cd + /     ----> create the object
                // TODO: Implement cd + name  ----> go in a new dir
                // TODO: Implement cd + ..    ----> go back in parent dir
            }
        }
        else {
            var _b = __read(row.split(' '), 2), dirOrFile = _b[0], name = _b[1];
            if (dirOrFile == 'dir') {
                // TODO: Implement new directory creation
            }
            else if (!Number.isNaN(Number(dirOrFile))) {
                // TODO: Implement file creation
            }
        }
    });
    return fileTree;
}
var SKELETON = {
    directories: {
        '/': {
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
        },
    },
    files: {
        'b.txt': { size: 14848514, parent: '/' },
        'c.dat': { size: 8504156, parent: '/' },
    },
};
main("$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k");
//# sourceMappingURL=space.js.map