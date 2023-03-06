// Трансформировать в массив имён

// У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.

// Например:

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map((el) => {
  return el.name;
});

console.log(names); // Вася, Петя, Маша
