// Узнать ширину полосы прокрутки

// Напишите код, который возвращает ширину стандартной полосы прокрутки.

// Для Windows она обычно колеблется от 12px до 20px.
// Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.

// P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого.

function getScrollWidth() {
  let div = document.createElement('div');
  div.style.overflow = 'scroll';
  (div.style.width = '100px'), (div.style.height = '100px');
  document.body.prepend(div);
  let result = div.offsetWidth - div.clientWidth;
  div.remove();
  return result;
}

console.log(getScrollWidth());
