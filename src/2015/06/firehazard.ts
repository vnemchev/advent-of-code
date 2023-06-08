interface ICommands {
    command: string;
    startX: number;
    endX: number;
    startY: number;
    endY: number;
}

function findLitLights(input: string): object {
    let grid = createLightsGrid();

    input.split('\n').forEach(row => {
        const commandInfo = parseCommands(row);
        const manipulatedGrid = manipulateGrid(grid, commandInfo);
        grid = [...manipulatedGrid];
    });
    const litLights = findOnlyLit(grid);
    const totalBrightness = findTotalBrightness(grid);

    return { litLights, totalBrightness };
}

function createLightsGrid(): number[][] {
    return Array.from(Array(1000)).map(
        e => (e = Array.from(Array(1000)).map(e => (e = 0))),
    );
}

function parseCommands(row: string): ICommands {
    const pattern = /[0-9]*,[0-9]*/g;
    const coordinates: string[] = row.match(pattern) || [];
    const [from, to] = coordinates;
    const [startY, startX] = from.split(',').map(Number);
    const [endY, endX] = to.split(',').map(Number);

    const splitRow = row.split(' ');
    let command = '';

    splitRow[0] == 'toggle'
        ? (command = splitRow[0])
        : (command = splitRow.slice(0, 2).join(' '));

    return { command, startX, endX, startY, endY };
}

function manipulateGrid(
    grid: number[][],
    { command, startX, endX, startY, endY }: ICommands,
): number[][] {
    for (let i = startY; i <= endY; i++) {
        for (let j = startX; j <= endX; j++) {
            if (command == 'turn on') grid[i][j]++;
            // grid[i][j] = 1;
            else if (command == 'turn off' && grid[i][j] > 0) grid[i][j]--;
            // grid[i][j] = 0;
            else if (command == 'toggle') grid[i][j] += 2;
            // grid[i][j] == 1 ? (grid[i][j] = 0) : (grid[i][j] = 1);
        }
    }
    return grid;
}

function findOnlyLit(grid: number[][]): number {
    let litLights = 0;
    const rowsWithLit = grid.filter(r => r.includes(1));
    rowsWithLit.forEach(r => {
        const litLightsInRow = r.filter(l => l == 1);
        litLightsInRow.forEach(l => litLights++);
    });
    return litLights;
}

function findTotalBrightness(grid: number[][]): number {
    let totalBrightness = 0;
    grid.forEach(r => {
        r.forEach(l => {
            if (l != 0) totalBrightness += l;
        });
    });
    return totalBrightness;
}
