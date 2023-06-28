"use strict";
var gender;
(function (gender) {
    gender["ACAO"] = "a\u00E7\u00E3o";
    gender["DRAMA"] = "drama";
    gender["COMEDIA"] = "com\u00E9dia";
    gender["ROMANCE"] = "romance";
    gender["TERROR"] = "terror";
})(gender || (gender = {}));
function getFilm(name, year, gender, pontuation) {
    const film = {
        name: name,
        year: year,
        gender: gender,
        pontuation: pontuation ? pontuation : 0
    };
    let hasPontuation = pontuation ? `| Pontuação: ${film.pontuation}` : '';
    return `Nome: ${film.name} | Ano: ${film.year} | Genero: ${film.gender} ${hasPontuation}`;
}
console.log(getFilm('GOT', 2012, gender.ACAO, 70));
//# sourceMappingURL=exercicio10.js.map