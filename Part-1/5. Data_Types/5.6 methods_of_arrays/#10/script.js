// Перемешайте массив

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом)
// элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

let arr = [1, 2, 3];

function shuffle(array) {
  return array
    .map((el) => ({ el, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ el }) => el);
}

console.log(shuffle(arr));
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д.,
// с равной вероятностью каждого случая.