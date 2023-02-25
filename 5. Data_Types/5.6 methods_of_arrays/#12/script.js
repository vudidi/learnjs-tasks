// Оставить уникальные элементы массива

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  let uniqueArr = [];
  arr.forEach((el) => {
    if (!uniqueArr.includes(el)) uniqueArr.push(el);
  });
  return uniqueArr;
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings)); // кришна, харе, :-O
