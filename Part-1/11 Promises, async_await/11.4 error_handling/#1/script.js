// Ошибка в setTimeout
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(alert);

// Ответ: Не выполнится, т.к. есть скрытый "try..catch" блок, который обрабатывает ошибки.
