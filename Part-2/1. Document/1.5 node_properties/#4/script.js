// Где в DOM-иерархии "document"?

// Объектом какого класса является document? - объект класса HTMLDocument

// Какое место он занимает в DOM-иерархии?
// document.documentElement.parentNode // #document => выше HTML
console.log(document.documentElement.parentNode);

// Наследует ли он от Node или от Element, или может от HTMLElement?
// Наследует от Node
