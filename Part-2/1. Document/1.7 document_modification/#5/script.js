// Создайте дерево из объекта

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Синтаксис:

// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере

// Выберите один из двух способов решения этой задачи:

// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.

// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.

let data = {
  fish: {
    trout: {},
    salmon: {},
  },
  trees: {
    huge: {
      sequoia: {},
      oak: {},
    },
    flower: {
      apple: {},
      magnolia: {},
    },
  },
  empty: {},
};

const container = document.getElementById('container');

// createTree(container, data); // создаёт дерево в контейнере

function getDeepList(newObj, id) {
  let ul = document.createElement('ul');
  document.getElementById(id).append(ul);

  for (let key in newObj) {
    let isEmpty = Object.entries(newObj[key]).length === 0;
    let id = key;
    let li = document.createElement('li');
    li.textContent = key;
    li.setAttribute('id', key);
    ul.append(li);

    if (!isEmpty) {
      getDeepList(newObj[key], id);
    }
  }
}

function createTree(container, obj) {
  for (let key in obj) {
    let id = key;

    let li = document.createElement('li');
    li.textContent = key;
    li.setAttribute('id', key);

    container.append(li);

    let isEmpty = Object.entries(obj[key]).length === 0;

    if (!isEmpty) {
      getDeepList(obj[key], id);
    }
  }
}

createTree(container, data);
