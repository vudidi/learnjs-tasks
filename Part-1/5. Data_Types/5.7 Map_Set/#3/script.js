// Перебираемые ключи

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними,
// например, применить метод .push.

// Но это не выходит:

let map = new Map();

map.set('name1', 'John');
map.set('name2', 'Ann');
map.set('name3', 'Rob');

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// keys.push('more');
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// Ответ: keys является сущностью MapIterator, которой не доступен метод push.
// Необходимо создать массив ключей
// let keys = [...map.keys()];

console.log(keys);
