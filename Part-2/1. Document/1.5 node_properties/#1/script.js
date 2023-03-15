// Считаем потомков

// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

const list = document.querySelector('ul');

console.log(list.querySelectorAll('li'));

// Какой в нём текст (без поддерева) ?
for (let li of list.querySelectorAll('li')) {
  let title = li.textContent;
  console.log(title);
}

// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
console.log(list.getElementsByTagName('li').length);
