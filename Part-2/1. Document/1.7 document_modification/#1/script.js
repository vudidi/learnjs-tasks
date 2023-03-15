// createTextNode vs innerHTML vs textContent

// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text));
elem.innerHTML = text;
elem.textContent = text;

// Ответ: elem.append(document.createTextNode(text)) и textContent
