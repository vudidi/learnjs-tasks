// Модальное диалоговое окно с формой

// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK»,
// после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

// Требования:

// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно,
// пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.
// Пример использования:

// showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
//   alert(value);
// });

// P.S. HTML/CSS исходного кода к этой задаче содержит форму с фиксированным позиционированием, но вы должны сделать её модальной.

const button = document.querySelector('button');
const formDiv = document.querySelector('#prompt-form-container');
const form = document.querySelector('#prompt-form');
const message = document.querySelector('#prompt-message');

button.addEventListener('click', () => {
  showPrompt('Введите что-нибудь<br>...умное :)', function (value) {
    alert(value);
  });
});

function showPrompt(html, callback) {
  formDiv.hidden = false;
  form.text.focus();
  message.innerHTML = html;
  document.body.style.backgroundColor = 'gray';
  form.addEventListener('submit', (event) => {
    if (form.text.value === '') {
      event.preventDefault();
      return;
    }
    callback(form.text.value);
  });
  form.cancel.addEventListener('click', () => {
    formDiv.hidden = true;
    document.body.removeAttribute('style');
  });
  window.addEventListener('keydown', (event) => {
    let active = document.activeElement;
    if (event.code === 'Tab' && event.shiftKey && active === form.text) {
      event.preventDefault();
      form.cancel.focus();
    }
    if (event.code === 'Tab' && !event.shiftKey && active === form.cancel) {
      event.preventDefault();
      form.text.focus();
    }
  });
}
