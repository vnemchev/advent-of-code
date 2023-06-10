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
var interfaces_1 = require("./interfaces");
function main(input) {
    var commands = input.split('\n');
    // treeCreator(commands);
}
function treeCreator(input) {
    var commands = input.split('\n');
    var fileTree = {};
    var currentDir = '';
    var prevDir = '';
    commands.forEach(function (row, i) {
        if (row[0] == '$') {
            "";
            var _a = __read(row.split(' '), 3), dollar = _a[0], command = _a[1], dir = _a[2];
            if (command == 'ls') {
                // TODO: Implement listing command
            }
            else if (command == 'cd') {
                if (dir == '/' && !fileTree[dir]) {
                    // TODO: Implement cd + /     ----> create the object
                    fileTree[dir] = {};
                    currentDir = dir;
                }
                else if (dir == '..') {
                    // TODO: Implement cd + ..    ----> go back in parent dir
                    // prevDir = fileTree[]
                }
                else {
                    // TODO: Implement cd + name  ----> go in a new dir
                    var mainDir = fileTree['/'];
                    console.log(mainDir);
                }
            }
        }
        else {
            var _b = __read(row.split(' '), 2), dirOrFile = _b[0], name = _b[1];
            // TODO: Implement new directory creation
            // TODO: Implement file creation
        }
    });
    return fileTree;
}
var readSkel = function () {
    console.log(interfaces_1.SKELETON);
};
readSkel();
treeCreator("$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k");
//# sourceMappingURL=space.js.map