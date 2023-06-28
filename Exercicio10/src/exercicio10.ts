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

