interface IDirectory {
    [name: string | 'parent']: IDirectory | IFile | string;
}

interface IFile {
    size: number;
    parent: string;
}

export { IDirectory, IFile };

const SKELETON: IDirectory = {
    '/': {
        a: {
            e: {
                i: { size: 584, parent: 'e' },
                parent: 'a',
            },
            f: { size: 29116, parent: 'a' },
            g: { size: 2557, parent: 'a' },
            'h.lst': { size: 62596, parent: 'a' },
            parent: '/',
        },
        d: {
            j: { size: 4060174, parent: 'd' },
            'd.log': { size: 8033020, parent: 'd' },
            'd.ext': { size: 5626152, parent: 'd' },
            k: { size: 7214296, parent: 'd' },
            parent: '/',
        },
        'b.txt': { size: 14848514, parent: '/' },
        'c.dat': { size: 8504156, parent: '/' },
    },
};
