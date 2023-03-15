// Создать раскрывающееся меню

// Создать меню, которое по нажатию открывается либо закрывается

// P.S. HTML/CSS исходного документа можно и нужно менять.

document.querySelector('.title').onclick = (e) => {
  menu = document.querySelector('.menu').classList.toggle('open');
};
