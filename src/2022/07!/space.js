function main(input) {
    const fileTree = {};

    let currentDir = '';

    const commands = {
        cd: {
            '/': () => {
                fileTree['/'] = {};
                currentDir = '/'
            },
            '..': () => {
                
            },

        },
        ls: {},
    };

    input = input.split('\n');

    for (let i = 0; i < input.length; i++) {
        const line = input[i].split(' ');
        if (line[0] === '$') {
            let a = commands[line[1]][line[2]];
            console.log(a());
        }
    }

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
