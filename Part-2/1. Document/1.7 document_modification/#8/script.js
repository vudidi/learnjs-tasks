// Цветные часы с использованием setInterval

// Создайте цветные часы

// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.

let date = new Date();

let timer = {
  timerId: 0,
  update() {
    document.getElementById('timer').innerHTML = `${formatDate(date)}`;
  },
  start() {
    this.update();
    this.timerId = setInterval(() => timer.update(), 1000);
  },
  stop() {
    clearInterval(this.timerId);
  },
};

timer.update();

function formatDate(date) {
  date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `<text style="color:indianred">${hour}</text>:<text style="color:#6ad47b">${minutes}</text>:<text style="color:deepskyblue">${seconds}</text>`;
}
