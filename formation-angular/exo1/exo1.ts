// Liste de users
const users = [
    { name: "Jean", age: 18 },
    { name: "Paul", age: 14 },
    { name: "Patrick", age: 56 }
];

// Renvoyer les noms des utilisateurs majeurs
let filteredUsersNames = users
    .filter(x => x.age >= 18)
    .map(x => x.name)
console.log(filteredUsersNames);

// Faire un objet qui contient deux tableaux, adultes et enfants
const byAge = users.reduce(function(acc, item) {
    if (item.age >= 18) {
        acc.adults.push(item)
    }
    else {
        acc.children.push(item)
    }
    return acc
}, {
    adults: [],
    children: []
})
console.log(byAge)