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

  oderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//REST PATTERN
//Spread, por que está en el lado derecho del igual =
const arr = [1, 2, ...[3, 4]];
//Esta sería la forma de usar el rest, a la izquierda del =
const [a, b, ...others] = [1, 2, 4, 5];
console.log(a, b, others);

//Caso practico, sacamos todos los elementos de varios arrays y los ponemos variables
//Esta forma de usar el rest no incluye ningún elemento evitado a propósito (el espacio), por eso el rest debe ser el último elemento
const [x, , y, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(x, y, otherFood);

//Uso con Objetos

//Creando un objeto con 2 dias de la semana, tenemos 3 dias en total y le quitamos el primero
//destructuramos sacando el sábado del objeto, y el rest guarda el resto de parámetros en un nuevo objeto que llamamos weekdays.
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Funciones
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 3, 4, 5);
//El rest toma todos los parametros que le damos a la función y los mete en un array, hace lo contrario al spread

//Esto sería lo mismo
const h = [34, 43, 42];
add(...h);

//El primer parametro se guarda como el primero de la función, el resto como un array
restaurant.oderPizza('peras', 'olives', 'tomates');
restaurant.oderPizza('queso');
