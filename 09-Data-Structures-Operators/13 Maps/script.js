'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //Función retornando un array para destructurarlo luego
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//

const rest = new Map(); //creando el map
rest.set('name', 'clasico español'); //rellenando el map
rest.set(1, 'valencia'); //rellenando el map
rest.set(1, 'Gandia'); //rellenando el map
//el método set retorna el map actualizado
console.log(rest.set(3, 'retorna'));
//esta propiedad de retornar al llamar nos permite encadenar el método set de la siguiente forma
rest
  .set('categorias', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));

//beneficios de tener true and false
//obtener si está abierto o cerrado dependiendo de la hora que le damos
const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//métodos de maps
//comprobar si el map tiene cierta clave
console.log(rest.has('categorias'));
rest.delete(2);
console.log(rest);

console.log(rest.size);

//usando arrays o objects como map keys

rest.set([1, 2], 'test');
console.log(rest);
console.log();
//objeto
rest.set(document.querySelector('h1'), 'Heading');

///////MAPS ITERATION

const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'correct!'],
  [false, 'wrong'],
]);
console.log(question);

//covert object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//hacer preguntas
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('di tu respuesta'));
console.log(answer);
//si la respuesta coincide, get true or false del map
console.log(question.get(question.get('correct') === answer));

//Covertir el map a un array
console.log([...question]);
//otros métodos
console.log([...question.keys()]);
console.log([...question.values()]);
