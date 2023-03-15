// Сортировка таблицы

// Вот таблица:

{
  /* <table>
<thead>
  <tr>
    <th>Name</th><th>Surname</th><th>Age</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>John</td><td>Smith</td><td>10</td>
  </tr>
  <tr>
    <td>Pete</td><td>Brown</td><td>15</td>
  </tr>
  <tr>
    <td>Ann</td><td>Lee</td><td>5</td>
  </tr>
  <tr>
    <td>...</td><td>...</td><td>...</td>
  </tr>
</tbody>
</table> */
}
// В ней может быть больше строк.

// Напишите код для сортировки по столбцу "name".

let list = document.querySelectorAll('tr');
const table = document.querySelector('table');

let arr = Array.from(list);

arr.sort((a, b) => {
  if (a.firstElementChild.tagName == 'TH') {
    return 1;
  } else if (b.firstElementChild.tagName == 'TH') {
    return -1;
  } else {
    return b.firstElementChild.textContent.localeCompare(
      a.firstElementChild.textContent,
      'en'
    );
  }
});

arr.forEach(function (item) {
  table.prepend(item);
});
