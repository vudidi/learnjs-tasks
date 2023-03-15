// Сортируемая таблица

// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

// Каждый элемент <th> имеет атрибут data-type:

// <table id="grid">
//   <thead>
//     <tr>
//       <th data-type="number">Возраст</th>
//       <th data-type="string">Имя</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>5</td>
//       <td>Вася</td>
//     </tr>
//     <tr>
//       <td>10</td>
//       <td>Петя</td>
//     </tr>
//     ...
//   </tbody>
// </table>
// В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.

// Сортировка должна поддерживать только типы "string" и "number".

// P.S. Таблица может быть большой, с любым числом строк и столбцов.

const table = document.querySelector('#grid');

table.addEventListener('click', (event) => {
  let sortType = event.target.dataset.type;
  if (!sortType) return;

  let rows = Array.from(document.querySelectorAll('#grid tbody tr'));

  if (sortType === 'string') {
    rows.sort((a, b) => {
      let nameA = a.lastElementChild.textContent;
      let nameB = b.lastElementChild.textContent;
      return nameA.charCodeAt(0) - nameB.charCodeAt(0);
    });
  }

  if (sortType === 'number') {
    rows.sort((a, b) => {
      let numA = Number(a.firstElementChild.textContent);
      let numB = Number(b.firstElementChild.textContent);
      return numA - numB;
    });
  }

  rows.forEach((item, i) => {
    document.querySelector('#grid tbody').append(item);
  });
});
