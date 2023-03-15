// Добавьте пункт к выпадающему списку

// Имеется <select>:

// <select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>

// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

const select = document.getElementById('genres');

const selected = select.options[select.selectedIndex];
console.log(selected.value, selected.text);
select.append(new Option('Классика', 'classic'));
select.options[select.options.length - 1].selected = true;
