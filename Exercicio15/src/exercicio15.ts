function factorial(word: string) {
    let wordSize = word.length;    

    if (wordSize === 0 || wordSize === 1) {
        return 1;
    }

    //com laço while
    let result = wordSize;
    while(wordSize > 1) {
        wordSize--;
        result *= wordSize;
    }
    return result;

    //com laço for
    /*for (var i = wordSize - 1; i >= 1; i--) {
        wordSize *= i;
    }
    return wordSize;
    */
}

console.log(factorial('gatos'));