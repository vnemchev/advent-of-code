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
function main(input) {
    // const commands = {
    //     cd: {
    //         '/': function () {
    //             if (fileTree['/'] == undefined) {
    //                 fileTree['/'] = {};
    //             }
    //             currentDir = fileTree['/'];
    //             return currentDir;
    //         },
    //         '..': function (prev) {
    //             currentDir = fileTree[prev];
    //         },
    //     },
    //     ls: {},
    // };
    var fileTree = {};
    var currentDir = {}, prevDirName = '';
    input = input.split('\n');
    for (var i = 0; i < input.length; i++) {
        var line = input[i].split(' ');
        if (line.length === 3) {
            var _a = __read(line, 3), command = _a[1], dir = _a[2];
            navigate(dir);
        }
        else {
        }
    }
    console.log(fileTree['/']);
    function navigate(dirName) {
        if (fileTree[dirName] == undefined) {
            fileTree[dirName] = {};
        }
        switch (dirName) {
            case '/':
                prevDirName = currentDir;
                currentDir = fileTree[dirName];
                break;
            case '..':
                break;
            default:
                break;
        }
    }
    Object.entries(fileTree).forEach(function (e) { return console.log(e); });
}
main("$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k");
//# sourceMappingURL=space.js.map