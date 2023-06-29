//Informações essenciais
//nome
//ano
//genero
//pontuação ?

enum genre {
	action  = "ação",
	drama   = "drama",
	comedy  = "comédia",
	romance = "romance",
	terror  = "terror"
}

type film = {
    name: string,
    year: number,
    genre: string,
    pontuation: number
}

function getFilm(name: string, year: number, genre: string, pontuation?: number): string {
    let film1: film = {
        name: name,
        year: year,
        genre: genre,
        pontuation: pontuation ? pontuation : 0,
    }

    let hasPontuation = pontuation ? `| Pontuação: ${film1.pontuation}` : '';

    return `Nome: ${film1.name} | Ano: ${film1.year} | Genero: ${film1.genre} ${hasPontuation}`;
}

console.log(getFilm('GAme of thrones', 2010, genre.romance, 99));







/*

enum gender {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type films = {
    name: string,
    year: number,
    gender: string,
    pontuation: number
}

function getFilm(name: string, year: number, gender: string, pontuation?: number | undefined): string {
    const film: films = {
        name: name,
        year: year,
        gender: gender,
        pontuation: pontuation ? pontuation : 0
    }

    let hasPontuation = pontuation ? `| Pontuação: ${film.pontuation}` : '';

    return `Nome: ${film.name} | Ano: ${film.year} | Genero: ${film.gender} ${hasPontuation}`;

}

console.log(getFilm('GOT', 2012, gender.ACAO, 70));

*/