// Выведите список потомков в дереве

// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов.
// Узлы нижнего уровня, без детей – пропускайте.

const list = document.querySelectorAll('li');

function methodName() {
  for (let li of list) {
    let count = li.getElementsByTagName('li').length;
    if (!count) continue;

    li.firstChild.data += ' - ' + count;
  }
}

methodName();
