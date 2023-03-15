// Добавить кнопку закрытия

// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

const removeButtons = document.querySelectorAll('.remove-button');

removeButtons.forEach((el) => {
  el.addEventListener('click', () => {
    el.closest('.pane').style.display = 'none';
  });
});
