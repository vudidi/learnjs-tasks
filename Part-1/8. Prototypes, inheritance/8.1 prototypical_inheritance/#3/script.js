// Куда будет произведена запись?

// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

// Ответ: запись будет сделана в объект rabbit, т.к. он использует метод из прототипа, а метод обращается к объекту с помощью this

console.log(animal);
console.log(rabbit);
