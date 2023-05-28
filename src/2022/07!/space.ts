import { IFileTree } from './interfaces';

function main(input: string): void {
    const commands = input.split('\n');
    controller(commands);
}

function controller(commands: string[]) {
    commands.forEach((row, i) => {
        if (input[0] == '$') {
            const [dollar, command, dir] = row.split(' ');
            if (command == 'ls') {
                // Implement listing command
            } else if (command == 'cd') {
                // Implement cd + /     ----> create the object
                // Implement cd + name  ----> go in a new dir
                // Implement cd + ..    ----> go back in parent dir
            }
        } else {
            const [dirOrFile, name] = row.split(' ');
            if (dirOrFile == 'dir') {
                // Implement new directory creation
            } else if (!Number.isNaN(Number(dirOrFile))) {
                // Implement file creation
            }
        }
    });
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
