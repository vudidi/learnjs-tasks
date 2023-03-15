// Изменяем "prototype"

// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit1 = new Rabbit();

console.log('rabbit1', rabbit1.eats); // true

// ============================================================================
// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit2 = new Rabbit();

Rabbit.prototype = {};

console.log('rabbit2', rabbit2.eats); // ? true

// ============================================================================
// …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit3 = new Rabbit();

Rabbit.prototype.eats = false;

console.log('rabbit3', rabbit3.eats); // ? false

// // ============================================================================
// // Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit4 = new Rabbit();

delete rabbit4.eats;

console.log('rabbit4', rabbit4.eats); // ? true

// // ============================================================================
// // Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit5 = new Rabbit();

delete Rabbit.prototype.eats;

console.log('rabbit5', rabbit5.eats); // ? undefined
