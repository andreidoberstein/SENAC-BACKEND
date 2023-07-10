"use strict";
function apresentation(name, date) {
    let splitDate = date.split('/');
    let month = getDescription(splitDate[1]);
    return `Olá me chamo ${name}, nasci no dia ${splitDate[0]} do mês de ${month} do ano de ${splitDate[2]}`;
}
function getDescription(month) {
    switch (month) {
        case '06':
            month = 'Junho';
            break;
        default:
            console.log('Não encontrado');
            break;
    }
    return month;
}
console.log(apresentation('Renato Gaúcho', '23/06/23'));
//# sourceMappingURL=exercicio7.js.map