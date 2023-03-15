// Редактируемый div

// Создайте <div>, который превращается в <textarea>, если на него кликнуть.

// <textarea> позволяет редактировать HTML в элементе <div>.

// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.

const view = document.getElementById('view');

function clickHandler(e) {
  const textarea = document.createElement('textarea');

  textarea.classList.add('edit');
  view.replaceWith(textarea);
  textarea.value = view.innerHTML;
  textarea.focus();

  textarea.addEventListener('keydown', keyDownHandler);
  textarea.addEventListener('blur', blurHandler);

  function keyDownHandler(e) {
    if (e.code === 'Enter') e.target.blur();
  }

  function blurHandler(e) {
    textarea.replaceWith(view);
    view.innerHTML = textarea.value;

    textarea.removeEventListener('keydown', keyDownHandler);
    textarea.removeEventListener('blur', blurHandler);
  }
}

view.addEventListener('click', clickHandler);
