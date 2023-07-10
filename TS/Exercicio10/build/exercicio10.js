"use strict";
var genre;
(function (genre) {
    genre["action"] = "a\u00E7\u00E3o";
    genre["drama"] = "drama";
    genre["comedy"] = "com\u00E9dia";
    genre["romance"] = "romance";
    genre["terror"] = "terror";
})(genre || (genre = {}));
function getFilm(name, year, genre, pontuation) {
    let film1 = {
        name: name,
        year: year,
        genre: genre,
        pontuation: pontuation ? pontuation : 0,
    };
    let hasPontuation = pontuation ? `| Pontuação: ${film1.pontuation}` : '';
    return `Nome: ${film1.name} | Ano: ${film1.year} | Genero: ${film1.genre} ${hasPontuation}`;
}
console.log(getFilm('GAme of thrones', 2010, genre.romance, 99));
//# sourceMappingURL=exercicio10.js.map