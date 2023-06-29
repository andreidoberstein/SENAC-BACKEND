"use strict";
function factorial(word) {
    let wordSize = word.length;
    if (wordSize === 0 || wordSize === 1) {
        return 1;
    }
    let result = wordSize;
    while (wordSize > 1) {
        wordSize--;
        result *= wordSize;
    }
    return result;
}
console.log(factorial('gatos'));
//# sourceMappingURL=exercicio15.js.map