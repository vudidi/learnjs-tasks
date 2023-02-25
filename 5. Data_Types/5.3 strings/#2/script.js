// Проверка на спам

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру

function checkSpam(str) {
  const a = 'viagra';
  const b = 'XXX';

  return (
    str.toLowerCase().includes(a.toLowerCase()) ||
    str.toLowerCase().includes(b.toLowerCase())
  );
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

checkSpam('buy ViAgRA now') == true;
checkSpam('free xxxxx') == true;
checkSpam('innocent rabbit') == false;
