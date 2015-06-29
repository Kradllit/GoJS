var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function compare(a,b) {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
    return 0;
}

people.sort(compare);

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6

for (var i in people) {
    console.log(people[i].name);
}