// Покажите заметку рядом с элементом

// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения
// свойства position рядом с элементом anchor.

// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html),
// которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку»
// с текстом html на заданной позиции position рядом с элементом anchor.

function positionAt(anchor, position, elem) {
  let anchorCoords = anchor.getBoundingClientRect();
  elem.style.position = 'fixed';
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
