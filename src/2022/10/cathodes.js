function rayTube(input) {
    const commands = input.split('\n');
    let register = 1,
        loopCount = 0;

    for (const command of commands) {
        const [cd, number] = command.split(' ');
        // number = Number(number);

        if (cd !== 'noop') {
            loopCount++;
            console.log(loopCount + '. - ' + register);
            register += +number;
            loopCount++;
        } else {
            loopCount++;
        }
        console.log('----------');

        console.log(loopCount + '. - ' + register);
    }
    console.log(`
    ${loopCount}
    ${register}
    `);
}

rayTube(`noop
addx 3
addx -5`);
