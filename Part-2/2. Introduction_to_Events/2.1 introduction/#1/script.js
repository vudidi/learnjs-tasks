// Скрыть элемент по нажатию кнопки

// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

const btn = document.querySelector('#hider');
const text = document.querySelector('#text');

btn.addEventListener('click', () => {
  text.style.display = 'none';
});
