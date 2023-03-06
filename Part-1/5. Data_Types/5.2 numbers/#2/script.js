// Почему 6.35.toFixed(1) == 6.3?

// Методы Math.round и toFixed, согласно документации,
// округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону,
// тогда как 5..9 в большую сторону.

// Например:

alert((1.35).toFixed(1)); // 1.4

// Но почему в примере ниже 6.35 округляется до 6.3?

alert((6.35).toFixed(1)); // 6.3

// Как правильно округлить 6.35?

// Ответ: Округление вниз происходит из-за особенностей обработки данных.
// Число переводится в двоичный формат, в котором 6.35 является бесконечной дробью.
// При округлении бесконечной дроби возможна потеря точности как одну, так и в другую сторону.
// Исправить это можно, умножив число на 10 в определенной степени перед округлением,
// а после округления разделив на 10 в той же степени.
// В результате для округления мы должны получить число с одним знаком после запятой,
// дробная часть которого будет равна 0.5. 0.5 = 1/2,
// в двоичной системе такая дробная часть будет представлена точно.
// Таким образом, неточность исчезнет.
