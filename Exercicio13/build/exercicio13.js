"use strict";
let users = [
    { cliente: "Felipe", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [1040, 200] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Renato", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];
function getNegativeAmount(users) {
    calculateDebts();
    return users.filter(clients => {
        return clients.saldoTotal < 0;
    });
}
function calculateDebts() {
    return users.map(user => {
        const sumDebts = user.debitos.reduce((acumulator, value) => value ? acumulator += value : 0, 0);
        user.saldoTotal = user.saldoTotal - sumDebts;
        user.debitos = [];
    });
}
console.log(getNegativeAmount(users));
//# sourceMappingURL=exercicio13.js.map