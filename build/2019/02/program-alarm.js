"use strict";
function programAlarm(input) {
    var intcodeProgram = input.split(',').map(Number);
    editProg(intcodeProgram);
    for (var i = 0; i < intcodeProgram.length; i += 4) {
        var opcode = intcodeProgram[i];
        var noun = intcodeProgram[i + 1];
        var verb = intcodeProgram[i + 2];
        var target = intcodeProgram[i + 3];
        if (opcode == 99)
            break;
        if (opcode != 1 && opcode != 2)
            return new Error('Something went wrong!');
        manipulateProg({ arr: intcodeProgram, opcode: opcode, noun: noun, verb: verb, target: target });
        var item = intcodeProgram[0];
        if (intcodeProgram.join('') === '19690720') {
            return noun;
        }
    }
    return intcodeProgram[0];
}
function manipulateProg(_a) {
    var arr = _a.arr, opcode = _a.opcode, noun = _a.noun, verb = _a.verb, target = _a.target;
    var result;
    opcode == 1 ? (result = noun + verb) : (result = noun * verb);
    arr.splice(target, 1, result);
}
function editProg(arr) {
    arr[1] = 12;
    arr[2] = 2;
}
console.log(programAlarm("1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,2,23,6,27,2,6,27,31,2,13,31,35,1,10,35,39,2,39,13,43,1,43,13,47,1,6,47,51,1,10,51,55,2,55,6,59,1,5,59,63,2,9,63,67,1,6,67,71,2,9,71,75,1,6,75,79,2,79,13,83,1,83,10,87,1,13,87,91,1,91,10,95,2,9,95,99,1,5,99,103,2,10,103,107,1,107,2,111,1,111,5,0,99,2,14,0,0"));
//# sourceMappingURL=program-alarm.js.map