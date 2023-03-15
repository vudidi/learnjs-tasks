// Галерея изображений

// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

// P.S. Используйте делегирование.
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  let elem = e.target;
  if (elem.tagName == 'IMG') {
    let href = elem.closest('a').href;
    largeImg.src = href;
    e.preventDefault();
  }
});
