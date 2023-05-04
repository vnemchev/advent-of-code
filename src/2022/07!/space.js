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

    const fileTree = {};

    let currentDir = {},
        prevDirName = '';

    input = input.split('\n');

    for (let i = 0; i < input.length; i++) {
        const line = input[i].split(' ');

        if (line.length === 3) {
            const [, command, dir] = line;

            navigate(dir);
        } else {
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
    Object.entries(fileTree).forEach(e => console.log(e));
}

main(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`);
