// Редактирование TD по клику

// Сделайте ячейки таблицы редактируемыми по клику.

// По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML.
// Изменение размера ячейки должно быть отключено.
// Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
// Таблица может иметь множество ячеек. Используйте делегирование событий.

const table = document.getElementById('bagua-table');
let isEditMode;

table.addEventListener('click', clickHandler);

function clickHandler(e) {
  if (isEditMode) return;

  const td = e.target.closest('td');
  if (!td) return;

  editStart(td);
}

function editStart(td) {
  isEditMode = true;

  const area = document.createElement('textarea');
  area.classList.add('textarea');
  area.style.width = td.offsetWidth + 'px';
  area.style.height = td.offsetHeight + 'px';
  area.value = td.innerHTML;

  td.classList.add('td--edit');

  const editControls = document.createElement('div');
  editControls.classList.add('edit-controls');
  editControls.style.top = td.offsetHeight + 'px';

  const saveBtn = createButton('OK');
  const cancelBtn = createButton('CANCEL');
  editControls.append(saveBtn, cancelBtn);

  editControls.addEventListener('click', editControlsClickHandler);

  td.append(area, editControls);
  area.focus();

  function editControlsClickHandler(e) {
    if (e.target !== saveBtn && e.target !== cancelBtn) return;

    if (e.target === saveBtn) td.innerHTML = area.value;

    isEditMode = false;
    td.classList.remove('td--edit');
    editControls.removeEventListener('click', editControlsClickHandler);
    editControls.remove();
    area.remove();
  }
}

function createButton(btnText) {
  const button = document.createElement('button');
  button.textContent = btnText;
  return button;
}
