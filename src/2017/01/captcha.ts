function inverseCaptcha(input: string): number {
    let sum = 0;
    const inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        const currentDigit = Number(input[i]);
        const step = inputL / 2 + i;
        let nextDigit = 0;

        // i !== inputL - 1
        //     ? (nextDigit = Number(input[i + 1]))
        //     : (nextDigit = Number(input[0]));
        step > inputL - 1
            ? (nextDigit = Number(input[step - inputL]))
            : (nextDigit = Number(input[step]));

        if (currentDigit == nextDigit) sum += currentDigit;
    }
    return sum;
}
