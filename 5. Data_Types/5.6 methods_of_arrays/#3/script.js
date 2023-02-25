// Фильтрация по диапазону "на месте"

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и
// удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; arr.length > i; i++) {
    let item = arr[i];

    if (item < a || item > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]
