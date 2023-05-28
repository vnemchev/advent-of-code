import { IFileTree } from './interfaces';

function main(input: string): void {
    const commands = input.split('\n');

    treeCreator(commands);
}

function treeCreator(commands: string[]): IFileTree {
    const fileTree: IFileTree = {};

    commands.forEach((row, i) => {
        if (input[0] == '$') {
            const [dollar, command, dir] = row.split(' ');
            if (command == 'ls') {
                // TODO: Implement listing command
            } else if (command == 'cd') {
                // TODO: Implement cd + /     ----> create the object
                // TODO: Implement cd + name  ----> go in a new dir
                // TODO: Implement cd + ..    ----> go back in parent dir
            }
        } else {
            const [dirOrFile, name] = row.split(' ');
            if (dirOrFile == 'dir') {
                // TODO: Implement new directory creation
            } else if (!Number.isNaN(Number(dirOrFile))) {
                // TODO: Implement file creation
            }
        }
    });

    return fileTree;
}

const SKELETON: IFileTree = {
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
