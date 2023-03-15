// Раскрывающееся дерево

// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков

// Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.

const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  if (!event.target.firstElementChild) return;

  for (let item of event.target.childNodes) {
    item.hidden = !item.hidden;
  }
});
