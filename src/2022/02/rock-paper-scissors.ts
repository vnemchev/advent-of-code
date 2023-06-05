function rps(moveData: string): string {
    const moveList = moveData.split('\n');
    const rules: {
        [key: string]: { [key: string]: { [key: string]: number } };
    } = {
        A: {
            X: { movePoints: 3, roundPoints: 0 },
            Y: { movePoints: 1, roundPoints: 3 },
            Z: { movePoints: 2, roundPoints: 6 },
        },
        B: {
            X: { movePoints: 1, roundPoints: 0 },
            Y: { movePoints: 2, roundPoints: 3 },
            Z: { movePoints: 3, roundPoints: 6 },
        },
        C: {
            X: { movePoints: 2, roundPoints: 0 },
            Y: { movePoints: 3, roundPoints: 3 },
            Z: { movePoints: 1, roundPoints: 6 },
        },
    };

    let score = 0;

    for (const move of moveList) {
        const [enemyMove, outcome] = move.split(' ');
        const { movePoints, roundPoints } = rules[enemyMove][outcome];

        score += movePoints + roundPoints;
    }

    return `Total score: ${score}`;
}