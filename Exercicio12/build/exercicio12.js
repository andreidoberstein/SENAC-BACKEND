"use strict";
let users = [
    { name: "Felipe", email: "felipe@email.com", role: "admin" },
    { name: "Felipe", email: "felipe@email.com", role: "user" },
    { name: "Carlos", email: "carlos@email.com", role: 'admin' },
    { name: "Felipe", email: "felipe@email.com", role: "user" },
];
const result = users.filter((user) => {
    return user.role === 'admin';
});
const emails = result.map((listFilter) => {
    return listFilter.email;
});
console.log(emails);
//# sourceMappingURL=exercicio12.js.map