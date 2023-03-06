// Покажите день недели

// Напишите функцию getWeekDay(date),
// показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

let date = new Date(2012, 0, 3); // 3 января 2012 года

const weekArr = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

function getWeekDay(date) {
  return weekArr[date.getDay()];
}

console.log(getWeekDay(date)); // нужно вывести "ВТ"
