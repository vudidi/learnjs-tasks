// Очистите элемент

// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

{
  /* <ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol> */
}

// <script>
//   function clear(elem) {/* ваш код */}
//   clear(elem); // очищает список
// </script>;

const ol = document.querySelector('#elem');
const list = ol.querySelectorAll('li');

function clear(list) {
  for (let li of list) {
    li.remove();
  }
}

clear(list);
