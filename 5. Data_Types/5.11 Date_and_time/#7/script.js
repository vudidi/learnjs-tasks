// Сколько секунд осталось до завтра?
// важность: 5
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть
// конкретного значения сегодняшней даты.

const JOUR_MILLISECONDES = 86400000;

function getSecondsToTomorrow() {
  const currentDate = new Date();
  const futureDate = new Date(
    currentDate.getTime() + JOUR_MILLISECONDES
  ).setHours(00, 00, 00, 00);
  const result = futureDate - currentDate.getTime();
  return Math.round(result / 1000);
}
console.log(getSecondsToTomorrow());
