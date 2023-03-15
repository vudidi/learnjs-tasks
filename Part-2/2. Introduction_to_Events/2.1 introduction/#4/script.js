// Передвиньте мяч по полю

// Пусть мяч перемещается при клике на поле, туда, куда был клик

// Требования:

// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

field.addEventListener('click', (event) => {
  let h = field.clientHeight;
  let hN = field.offsetTop + field.clientTop;
  let w = field.clientWidth;
  let wN = field.offsetLeft + field.clientLeft;

  let y = event.pageY - hN - ball.offsetHeight / 2;
  let x = event.pageX - wN - ball.offsetWidth / 2;

  if (y < 0) y = 0;
  if (x < 0) x = 0;
  if (y > h - ball.offsetHeight) y = h - ball.offsetHeight;
  if (x > w - ball.offsetWidth) x = w - ball.offsetWidth;

  ball.style.top = y + 'px';
  ball.style.left = x + 'px';
});
