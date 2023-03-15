// Работа с прототипами

// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1) true

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2) null

delete animal.jumps;

console.log(rabbit.jumps); // ? (3) undefined
