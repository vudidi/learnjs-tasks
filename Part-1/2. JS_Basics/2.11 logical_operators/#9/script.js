// Проверка логина

// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль,
// если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

function requestLogin(value) {
  let password;
  if (value === 'Админ') {
    password = prompt('Введите пароль');
    if (password === 'Я главный') {
      alert('Здравствуйте!');
    } else if (password === '' || password === null) {
      alert('Отменено');
    } else {
      alert('Неверный пароль');
    }
  } else if (value === '' || value === null) {
    alert('Отменено');
  } else {
    alert('Я вас не знаю');
  }
}

requestLogin(prompt('Укажите ваш логин'));
