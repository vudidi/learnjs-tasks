// Мышь, управляемая клавиатурой

// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать

// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.

const mouse = document.querySelector('#mouse');

mouse.addEventListener('click', function () {
  mouse.setAttribute('tabindex', '0');
  mouse.focus();
  mouse.style.position = 'absolute';

  mouse.addEventListener('keydown', function (event) {
    if (event.code == 'ArrowUp') {
      mouse.style.top =
        mouse.getBoundingClientRect().top - mouse.offsetHeight + 'px';
    } else if (event.code == 'ArrowRight') {
      mouse.style.left =
        mouse.getBoundingClientRect().left + mouse.offsetWidth + 'px';
      console.log(mouse.getBoundingClientRect().right);
    } else if (event.code == 'ArrowDown') {
      mouse.style.top =
        mouse.getBoundingClientRect().top + mouse.offsetHeight + 'px';
    } else if (event.code == 'ArrowLeft') {
      mouse.style.left =
        mouse.getBoundingClientRect().left - mouse.offsetWidth + 'px';
    }
  });
});
