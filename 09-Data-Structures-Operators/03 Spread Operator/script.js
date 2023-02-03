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

  //Construyendo un método que acepta diferentes argumentos y pasandole como argumentos el spread operator

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is yuour delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

//SPREAD OPERATOR
//Para crear un nuevo array basado en este array pero con nuevos elementos al inicio
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

//Usando el spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

//El SPREAD OPERATOR SACA TODOS LOS VALORES DE UN ARRAY Y LOS COLOCA EN OTRO

//OTRO POSIBLE CASO CUANDO QUEREMOS PASAR ARGUMENTOS A FUNCIONES

console.log(...newArr);

//EJEMPLO
//CREAR UN NUEVO ELEMENTO DE COMIDA EN EL MENU
//CREAMOS UN NUEVO MENU

const newMenu = [...restaurant.mainMenu, 'Paella'];
console.log(newMenu);

//EJEMPLO DE CREAR SHALLOW COPIES DE ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

//MERGE ARRAYS
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//El spread operator funciona en todos los iterables (arrays, strings, maps, sets)
//Ejemplo en un string
const str = 'Sergio';
const letters = [...str, '', 'J.'];
console.log(letters);
console.log(...str);

//Casos en los que no funciona,
//console.log(`${...str}`);
//Sólo se puede se puede utilizar cuando se pasan como argumentos en una fucnción o se construye un nuevo array

//Construyendo un método que acepta diferentes argumentos y pasandole como argumentos el spread operator
const ingredients = [
  // prompt('Lets make pasta! Ingredient 1?'),
  // prompt('Lets make pasta! Ingredient 2?'),
  // prompt('Lets make pasta! Ingredient 3?'),
];

//Forma desfasa de hacerlo
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//Forma nueva de hacerlo
restaurant.orderPasta(...ingredients);

console.log();

//SPREAD OPERATOR EN OBJETOS

const newRestaurant = { ...restaurant, founder: 'Pepe' };
console.log(newRestaurant);

//shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Gandia';
console.log(restaurantCopy);
