// Название JavaScript

// Используя конструкцию if..else, напишите код, который будет спрашивать:
// „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!»,
// в противном случае – отобразить: «Не знаете? ECMAScript!»

function checkAnswer(value) {
  if (value === 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? ECMAScript!');
  }
}

checkAnswer(prompt('Какое «официальное» название JavaScript?'));
