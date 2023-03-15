// Какой обработчик запустится?

// В переменной button находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

const button = document.querySelector('#btn');

button.addEventListener('click', () => console.log('1'));

button.removeEventListener('click', () => console.log('1'));

button.onclick = () => console.log(2);

// Ответ: Запустятся все обработчики последовательно, поэтому выведется 1 (на 9 строке) и 2
