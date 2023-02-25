// Какой день месяца был много дней назад?

// Создайте функцию getDateAgo(date, days), возвращающую число,
// которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
// вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

const JOUR_MILLISECONDES = 86400000;

function getDateAgo(date, days) {
  return new Date(date.getTime() - days * JOUR_MILLISECONDES).getDate();
}

console.log('1', getDateAgo(date, 1));

// console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.
