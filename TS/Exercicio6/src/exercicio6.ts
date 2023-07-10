/*
function operations(num1: number, num2: number): void {
    let sum: number = num1 + num2;
    let diference: number = num1 - num2;
    let multiplication: number = num1 * num2;
    let division: number = num1 / num2;

    console.log(`Numeros recebidos: ${num1} e ${num2}\nSoma: ${sum}
    \nSubtração: ${diference}
    \nMultiplicação: ${multiplication}
    \nDivisão: ${division}`);
}
*/

function operations(num1: number, num2: number): string {
    let sum: number = num1 + num2;
    let diference: number = num1 - num2;
    let multiplication: number = num1 * num2;
    let division: number = num1 / num2;

    return `Numeros recebidos: ${num1} e ${num2}\nSoma: ${sum}
    \nSubtração: ${diference}
    \nMultiplicação: ${multiplication}
    \nDivisão: ${division}`;
}

//let result = operations(600, 45);
console.log(operations(600, 45));