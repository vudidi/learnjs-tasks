// Карусель

// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.

// P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.

let carousel = document.querySelector('.carousel');
let strip = document.querySelector('.strip');
let carouselList = document.querySelector('.carousel-list');

let arrow = {
  prev: document.querySelector('.arrow.prev'),
  next: document.querySelector('.arrow.next'),
};

let carouselDetails = {
  pdLeft: parseFloat(getComputedStyle(carousel).paddingLeft),
  pdRight: parseFloat(getComputedStyle(carousel).paddingRight),
  widthItem: carouselList.firstElementChild.offsetWidth,
  showElements: 3,
  mgLeft: 0,
};

carousel.style.width =
  carouselDetails.widthItem * carouselDetails.showElements + 'px';
strip.style.width =
  carouselDetails.widthItem * carouselDetails.showElements + 'px';

arrow.prev.onclick = () => slidingTo(-1);
arrow.next.onclick = () => slidingTo(1);

function slidingTo(to) {
  let itemsLength = carouselList.querySelectorAll('li').length;
  let { widthItem, showElements } = carouselDetails;

  if (to === 1) {
    widthItem *= -1;

    if (
      carouselDetails.mgLeft ===
      itemsLength * widthItem - showElements * widthItem
    )
      carouselDetails.mgLeft = 0;
    else carouselDetails.mgLeft += widthItem;
  } else if (to === -1) {
    widthItem *= 1;

    if (carouselDetails.mgLeft === 0)
      carouselDetails.mgLeft =
        (itemsLength * widthItem - showElements * widthItem) * -1;
    else carouselDetails.mgLeft += widthItem;
  }

  carouselList.style.marginLeft = carouselDetails.mgLeft + 'px';

  return '';
}
