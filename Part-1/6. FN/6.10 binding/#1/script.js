// Связанная функция как метод

// Что выведет функция?

function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();

// Ответ: объект Window, т.к. с помощью bind был обнулен контекст при вызове функции