// Найти размер прокрутки снизу

// Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху.
// А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?

// Напишите соответствующее выражение для произвольного элемента elem.

// P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.

const div = document.querySelector('p');

div.style.width = '150px';
div.style.height = '150px';
div.style.backgroundColor = '#6bb39b';
div.style.overflow = 'scroll';
div.style.whiteSpace = 'pre-line';

function getScrollBottom() {
  const result = div.scrollHeight - div.scrollTop - div.clientHeight;
  console.log(result);
}

div.addEventListener('scroll', getScrollBottom);

console.log('div.scrollHeight', div.scrollHeight);
console.log('div.scrollTop', div.scrollTop);
console.log('div.clientHeight', div.clientHeight);
