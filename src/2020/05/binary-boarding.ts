function binaryBoarding(input: string) {
    const rowCount = 128;
    const rowSeats = [...Array(rowCount).keys()];

    const partitions = input.split('\n');

    partitions.forEach(part => {
        const { row, restInput } = rowSearch(part, rowSeats)!;
        console.log(row, restInput);
    });
}

function rowSearch(
    string: string,
    range: number[],
):
    | {
          row: number;
          restInput: string;
      }
    | undefined {
    const current = string[0];
    const rangeL = range.length;

    let newRange: any[] = [];
    const newString = string.substring(1);

    if (current == 'F') {
        newRange = range.slice(0, rangeL / 2);
    } else if (current == 'B') {
        newRange = range.slice(rangeL / 2);
    }

    if (newRange.length > 1) {
        return rowSearch(newString, newRange);
    } else {
        return {
            row: newRange[0],
            restInput: newString,
        };
    }
}

binaryBoarding(`FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`);

// BFFFBBFRRR: row 70, column 7, seat ID 567.
// FFFBBBFRRR: row 14, column 7, seat ID 119.
// BBFFBBFRLL: row 102, column 4, seat ID 820.
