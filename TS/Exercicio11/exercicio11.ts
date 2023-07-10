enum sectors {
    mkt = 'marketing',
    ven = 'vendas',
    fin = 'financeiro',
};

let employees = [
	{ nome: "Marcos", salario: 2500, setor: sectors.mkt, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: sectors.ven, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: sectors.fin, presencial: true},
	{ nome: "João" ,salario: 2800, setor: sectors.mkt, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: sectors.fin, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: sectors.ven, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: sectors.mkt, presencial: true }
];

type people = {
    nome: string,
    salario: number,
    setor: string,
    presencial: boolean;
}

function filterEmployees(employees: people[]): people[] {    
    return employees.filter(people => {
        people.setor === sectors.mkt && people.presencial === true
    });
}

console.log(filterEmployees(employees));