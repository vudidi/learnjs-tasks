// Вывод односвязного списка в обратном порядке

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

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

function printListReverse1(obj) {
  for (let key in obj) {
    if (key === 'next') printListReverse1(obj.next);
  }
  if (obj) console.log(obj.value);
}

printListReverse1(list);

function printListReverse2(obj) {
  let arr = [];
  let loopObj = obj;

  while (loopObj) {
    arr.push(loopObj.value);
    loopObj = loopObj.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printListReverse2(list);
