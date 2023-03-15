// Найдите координаты точек относительно окна браузера

// В ифрейме ниже располагается документ с зелёным «полем».

// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

// Ваш код должен при помощи DOM получить четыре пары координат:

// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.

let field = document.getElementById('field');
let coordinates = field.getBoundingClientRect();

let answer1 = `${coordinates.left}:${coordinates.top}`;
let answer2 = `${coordinates.right}:${coordinates.bottom}`;
let answer3 = `${coordinates.left + field.clientLeft}:${
  coordinates.top + field.clientTop
}`;
let answer4 = `${coordinates.right - field.clientLeft}:${
  coordinates.bottom - field.clientTop
}`;

console.log(answer1, answer2, answer3, answer4);
