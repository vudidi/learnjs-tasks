// Последнее число месяца?

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
  let initialMonth = new Date(year, month).getMonth();
  let day = 0;
  while (true) {
    month = new Date(year, month, ++day).getMonth();

    if (month !== initialMonth) {
      day -= 1;
      break;
    }
  }
  return day;
}

console.log(getLastDayOfMonth(2012, 1));
