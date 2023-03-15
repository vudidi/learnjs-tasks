// Свойство функции после bind

// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Вася',
});

console.log(bound.test); // что выведет? почему?
console.log(sayHi.test);

// Ответ: undefined, т.к. у нового объекта bound другой контекст вызова без свойства test
// Свойство test в sayHi() не изменится
