// Сумма с помощью замыканий

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

function sum(a) {
  return function (b) {
    return a + b;
  };
}

sum(1)(2); // = 3
sum(5)(-1); // = 4

console.log(sum(1)(2));
console.log(sum(5)(-1));
