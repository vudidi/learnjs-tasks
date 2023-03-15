// Создайте календарь в виде таблицы

// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>.
// У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

// P.S. В этой задаче достаточно сгенерировать календарь, кликабельным его делать не нужно.

function createHeadCalendar(table, daysOfWeek) {
  let trHead = document.createElement('tr');

  daysOfWeek.forEach((e) => {
    const th = document.createElement('th');
    th.textContent = e;
    trHead.append(th);
  });

  table.append(trHead);
}

function createBodyCalendar(table, daysOfWeek, date, indexMonth) {
  while (indexMonth === date.getMonth()) {
    const tr = document.createElement('tr');

    daysOfWeek.forEach((e, i) => {
      const td = document.createElement('td');
      const dayOfWeek = date.getUTCDay();

      if (i === dayOfWeek && indexMonth === date.getMonth()) {
        const day = date.getDate();

        td.textContent = day;
        date.setDate(day + 1);
      }

      tr.append(td);
    });

    table.append(tr);
  }
}

function createCalendar(cal, year, month) {
  const indexMonth = month - 1;
  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let date = new Date(year, indexMonth, 1);
  let table = document.createElement('table');

  createHeadCalendar(table, daysOfWeek);
  createBodyCalendar(table, daysOfWeek, date, indexMonth);

  cal.append(table);
}

const calendar = document.querySelector('.calendar');

createCalendar(calendar, 2023, 03);
