// Форматирование относительной даты

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

// console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

// console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log(formatDate(new Date(new Date() - 86400 * 1000)));

const SECOND = 1000;
const MINUTE = 60000;
const HOUR = 3600000;

function formatNumber(number) {
  return number < 10 ? `0${number}` : number;
}

function formatDate(date) {
  let currentDate = new Date().getTime();
  const dataDate = date.getTime();

  const past = currentDate - dataDate;

  if (past < SECOND) {
    return 'прямо сейчас';
  } else if (past < MINUTE) {
    return `${past / 1000} сек. назад`;
  } else if (past < HOUR) {
    return `${past / 60000} мин. назад`;
  }

  const yesterdayDate = currentDate - past;

  const pastFormated = new Date(yesterdayDate);

  console.log(typeof formatNumber(pastFormated.getFullYear()));

  //  'день.месяц.год часы:минуты';
  return `${formatNumber(pastFormated.getDate())}.${formatNumber(
    pastFormated.getMonth() + 1
  )}.${formatNumber(
    String(pastFormated.getFullYear()).slice(2)
  )} ${formatNumber(pastFormated.getHours())}:${formatNumber(
    pastFormated.getMinutes()
  )}`;
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
