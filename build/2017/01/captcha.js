"use strict";
function inverseCaptcha(input) {
    var sum = 0;
    var inputL = input.length;
    for (var i = 0; i < inputL; i++) {
        var currentDigit = Number(input[i]);
        var step = inputL / 2 + i;
        var nextDigit = 0;
        // i !== inputL - 1
        //     ? (nextDigit = Number(input[i + 1]))
        //     : (nextDigit = Number(input[0]));
        step > inputL - 1
            ? (nextDigit = Number(input[step - inputL]))
            : (nextDigit = Number(input[step]));
        if (currentDigit == nextDigit)
            sum += currentDigit;
    }
    return sum;
}
//# sourceMappingURL=captcha.js.map