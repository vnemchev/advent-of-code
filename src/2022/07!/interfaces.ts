interface IFileTree {
    directories?: {
        [key: string]: IDirectory;
    };
    files?: {
        [key: string]: IFile;
    };
}

interface IDirectory {
    directories?: {
        [key: string]: IDirectory;
    };
    files?: {
        [key: string]: IFile;
    };
    parent?: string;
}

interface IFile {
    size: number;
    parent: string;
}

export {
    IFileTree, IDirectory, IFile
}