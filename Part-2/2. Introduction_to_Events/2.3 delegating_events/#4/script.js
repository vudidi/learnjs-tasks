// Поведение "подсказка"

// Напишите JS-код, реализующий поведение «подсказка».

// При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.

// Пример HTML с подсказками:

// <button data-tooltip="эта подсказка длиннее, чем элемент">Короткая кнопка</button>
// <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>
// Результат в ифрейме с документом:

// В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст. То есть, в них нет вложенных тегов (пока).

// Детали оформления:

// Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
// Подсказка должна быть, по возможности, посередине элемента.
// Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена,
// если нельзя показать сверху – показывать снизу элемента.
// Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
// Для решения вам понадобятся два события:

// mouseover срабатывает, когда указатель мыши заходит на элемент.
// mouseout срабатывает, когда указатель мыши уходит с элемента.
// Примените делегирование событий: установите оба обработчика на элемент document,
// чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.

// После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.

// P.S. В один момент может быть показана только одна подсказка.

document.onmouseover = (event) => {
  let target = event.target;
  if (!target.dataset.tooltip) return '';

  let tooltipMsg = target.dataset.tooltip;
  let tooltip = document.createElement('span');
  tooltip.innerHTML = tooltipMsg;
  tooltip.className = 'tooltip';

  target.append(tooltip);

  let targetCoord = event.target.getBoundingClientRect();
  let wrap = document.querySelector('.container');
  let wrapMetrics = {
    left: wrap.getBoundingClientRect().left,
    pdLeft: parseFloat(getComputedStyle(wrap).paddingLeft),
    border: wrap.clientLeft,
  };

  if (
    event.clientX - wrapMetrics.left - wrapMetrics.border - wrapMetrics.pdLeft >
    tooltip.offsetWidth / 2
  ) {
    tooltip.style.left =
      targetCoord.left + (target.offsetWidth - tooltip.offsetWidth) / 2 + 'px';
  } else tooltip.style.left = targetCoord.left + 'px';

  if (
    !(
      wrap.offsetWidth - (event.clientX - wrapMetrics.left) >
      tooltip.offsetWidth
    )
  ) {
    tooltip.style.left = wrapMetrics.width + 'px';
  }

  if (targetCoord.top < tooltip.offsetHeight + 5)
    tooltip.style.top = targetCoord.bottom + 5 + 'px';
  else if (targetCoord.top > tooltip.offsetHeight + 5)
    tooltip.style.top = targetCoord.top - tooltip.offsetHeight - 5 + 'px';
};

document.onmouseout = () => {
  let tooltip = document.querySelector('.tooltip');
  if (tooltip) tooltip.remove();
};
