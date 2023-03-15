// Вывод каждую секунду

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
  let i = from;

  let timerId = setInterval(function () {
    console.log(i);
    if (i == to) {
      clearInterval(timerId);
    }
    i++;
  }, 1000);
}

function printNumbersTimeout(from, to) {
  let i = from;

  setTimeout(function print() {
    console.log(i);
    if (i < to) {
      setTimeout(print, 1000);
    }
    i++;
  }, 1000);
}

printNumbersInterval(1, 5);
printNumbersTimeout(1, 5);
