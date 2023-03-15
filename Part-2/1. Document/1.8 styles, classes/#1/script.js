// Создать уведомление

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:

// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: 'Hello!', // HTML-уведомление
//   className: 'welcome', // дополнительный класс для div (необязательно)
// });

// Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.

function showNotification({ top = 0, right = 0, className, html }) {
  let el = document.createElement('div');
  el.innerHTML = html;
  el.style.position = 'absolute';
  el.style.top = top + 'px';
  el.style.right = right + 'px';
  el.classList.add(className);

  document.body.append(el);

  setTimeout(() => {
    el.remove();
  }, 1500);
}

showNotification({
  top: 10,
  right: 10,
  html: 'Hello!',
  className: 'welcome',
});
