"use strict";
let users = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];
const result = users.filter((user) => {
    return user.role === 'admin';
});
const emails = result.map((listFilter) => {
    return listFilter.email;
});
console.log(emails);
//# sourceMappingURL=exercicio12.js.map