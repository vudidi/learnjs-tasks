// Вывод односвязного списка

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?
// Ответ: Без рекурсии, т.к. в ней есть вызов функции внутри функции

function printList1(obj) {
  for (let key in obj) {
    if (key === 'value') {
      console.log(obj[key]);
    } else {
      printList1(obj.next);
    }
  }
}

printList1(list);

function printList2(obj) {
  let loopObj = obj;

  while (loopObj) {
    console.log(loopObj.value);
    loopObj = loopObj.next;
  }
}

printList2(list);
