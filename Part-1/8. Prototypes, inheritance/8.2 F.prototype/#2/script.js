// Создайте новый объект с помощью уже существующего

// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
// но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.

function objConstructor1(name) {
  this.name = name;
}

let obj = new objConstructor1('Ann');

let obj2 = new obj.constructor('Alex');

console.log(objConstructor1() == obj.constructor());

// И пример функции-конструктора, с которой такой код поведёт себя неправильно.

function objConstructor2(name) {
  this.name = name;
}

objConstructor2.prototype = {};

let obj3 = new objConstructor2('Ann');

let obj4 = new obj3.constructor('Alex');

console.log(objConstructor2() == obj3.constructor());
