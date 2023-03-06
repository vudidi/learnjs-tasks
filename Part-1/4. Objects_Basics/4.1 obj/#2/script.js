// Проверка на пустоту

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

let schedule = {};

alert(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  const keyArr = [];
  for (key in obj) {
    keyArr.push(key);
  }

  return keyArr.length > 0 ? false : true;
}

isEmpty(schedule);
