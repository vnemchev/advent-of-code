import { IFileTree } from './interfaces';

function main(input: string): void {
    parseInput(input);
}

function parseInput(input: string) {
    input.split('\n').forEach((row, i) => {
        if (input[0] == '$') {
        } else {
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
