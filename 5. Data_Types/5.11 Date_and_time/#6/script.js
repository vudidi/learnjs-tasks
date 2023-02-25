// Сколько сегодня прошло секунд?

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть
// конкретного значения сегодняшней даты.

function getSecondsToday() {
  const currentDate = new Date();
  const beginningDate = new Date(new Date().setHours(00, 00, 00, 00));
  const result = (currentDate.getTime() - beginningDate.getTime()) / 1000;
  return Math.round(result);
}

console.log(getSecondsToday());
