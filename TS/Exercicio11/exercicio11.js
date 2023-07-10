var sectors;
(function (sectors) {
    sectors["mkt"] = "marketing";
    sectors["ven"] = "vendas";
    sectors["fin"] = "financeiro";
})(sectors || (sectors = {}));
;
var employees = [
    { nome: "Marcos", salario: 2500, setor: sectors.mkt, presencial: true },
    { nome: "Maria", salario: 1500, setor: sectors.ven, presencial: false },
    { nome: "Salete", salario: 2200, setor: sectors.fin, presencial: true },
    { nome: "João", salario: 2800, setor: sectors.mkt, presencial: false },
    { nome: "Josué", salario: 5500, setor: sectors.fin, presencial: true },
    { nome: "Natalia", salario: 4700, setor: sectors.ven, presencial: true },
    { nome: "Paola", salario: 3500, setor: sectors.mkt, presencial: true }
];
function filterEmployees(employees) {
    return employees.filter(function (people) { return people.setor === sectors.mkt && people.presencial === true; });
}
console.log(filterEmployees(employees));
