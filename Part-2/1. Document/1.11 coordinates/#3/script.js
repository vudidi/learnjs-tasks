// Покажите заметку около элемента (абсолютное позиционирование)

// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

// Это предотвратит расхождение элементов при прокрутке страницы.

// Используйте решение предыдущего задания для начала.
// Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + scrollY,
    left: box.left + scrollY,
  };
}

function positionAt(anchor, position, elem) {
  let anchorCoords = anchor.getBoundingClientRect();
  elem.style.position = 'absolute';
  switch (position) {
    case 'top':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      break;

    case 'right':
      elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'bottom':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px';
      break;
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;

  document.body.append(note);

  positionAt(anchor, position, note);
}

const blockquote = document.querySelector('blockquote');

showNote(blockquote, 'bottom', 'Note');
