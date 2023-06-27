function apresentation(name: string, date: string): string {
    let splitDate = date.split('/');
    /* função para pegar a descrição do mês */
    //let month = getDescription(splitDate[1]);

    return `Olá me chamo ${name}, nasci no dia ${splitDate[0]} 
    do mês de ${splitDate[1]} do ano de ${splitDate[2]}`;

    /*return `Olá me chamo ${name}, nasci no dia ${splitDate[0]} do mês de ${month} do ano de ${splitDate[2]}`;*/
}

// função que recebe uma string com o mês numerico e retorna o mês por extenso
/*function getDescription(month: string): string {
    switch(month) {
        case '01':
            month = 'janeiro'
            break;
        case '02':
            month = 'fevereiro'
            break;
        case '03':
            month = 'março'
            break;
        case '04':
            month = 'abril'
            break;
        case '05':
            month = 'maio'
            break;
        case '06':
            month = 'junho'
            break;
        default:
            console.log('Não encontrado');
            break;
    }
    return month;
}*/

console.log(apresentation('Renato Gaúcho', '23/06/23'));