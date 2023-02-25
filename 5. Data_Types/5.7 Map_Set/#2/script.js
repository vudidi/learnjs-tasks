// Отфильтруйте анаграммы

// Анаграммы – это слова, у которых те же буквы в том же количестве,
// но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const sortedEl = arr[i].toLowerCase().split('').sort().join('');
    console.log(sortedEl);
    obj[sortedEl] = arr[i];
  }
  return [...Object.values(obj)];
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
