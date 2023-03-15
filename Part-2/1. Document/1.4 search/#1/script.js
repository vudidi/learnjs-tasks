// Поиск элементов
// важность: 4
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
const ageTable = document.getElementById('age-table');
console.log(ageTable);

// Все элементы label внутри этой таблицы (их три).
console.log(ageTable.querySelectorAll('label'));

// Первый td в этой таблице (со словом «Age»).
console.log(ageTable.querySelector('td'));

// Форму form с именем name="search".
const form = document.querySelector('[name="search-person"]');
console.log(form);

// Первый input в этой форме.
console.log(form.querySelectorAll('[name="age"]')[0]);

// Последний input в этой форме.
console.log(form.querySelectorAll('[name="age"]')[2]);
