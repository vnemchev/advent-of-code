import { IDirectory, SKELETON } from './interfaces';

function main(input: string): void {
    const commands = input.split('\n');

    // treeCreator(commands);
}

function treeCreator(input: string) {
    const commands = input.split('\n');

    const fileTree: IDirectory = {};

    let currentDir = '';
    let prevDir = '';

    commands.forEach((row, i) => {
        if (row[0] == '$') {
            ``;
            const [dollar, command, dir] = row.split(' ');
            if (command == 'ls') {
                // TODO: Implement listing command
            } else if (command == 'cd') {
                if (dir == '/' && !fileTree[dir]) {
                    // TODO: Implement cd + /     ----> create the object
                    fileTree[dir] = {};
                    currentDir = dir;
                } else if (dir == '..') {
                    // TODO: Implement cd + ..    ----> go back in parent dir
                    // prevDir = fileTree[]
                } else {
                    // TODO: Implement cd + name  ----> go in a new dir
                    const mainDir = fileTree['/'];
                    console.log(mainDir);
                }
            }
        } else {
            const [dirOrFile, name] = row.split(' ');
            // TODO: Implement new directory creation
            // TODO: Implement file creation
        }
    });
    return fileTree;
}

const readSkel = () => {
    
    console.log(SKELETON);
};

readSkel();

treeCreator(`$ cd /
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
