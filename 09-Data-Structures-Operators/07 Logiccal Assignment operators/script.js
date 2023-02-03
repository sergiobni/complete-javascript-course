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
const rest1 = {
  name: 'HOlas',
  numGuests: 0,
};
const rest2 = {
  name: 'restaurante2',
  owner: 'Juanjo',
};

//Set a default number of guests to all restaurants that not have that property
//Poner un número por defecto de huespedes a todos los restaurantes que aún no tienen la propiedad

//Haciendolo mediante el OR operator
//Si el rest 2 no contiene (falsy) numero entonces el número es 10
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1);
// console.log(rest2);

//Haciendolo con logical assignment
//En el primer caso un valor 0 daría falsy y tenemos un problema
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
//Para evitar el problema de los ceros falsos
rest1.numGuests ??= 10;
rest2.numGuests ??= 10; //Como no se han definido previamente nos da 10 por defecto

//Anonimizar propiedades
rest1.owner = rest1.owner && '<ANONYMOUS>'; //como no existe dueño nos da undefined
rest2.owner = rest2.owner && '<ANONYMOUS>';
//Forma corta
rest1.owner &&= '<ANON>';
rest2.owner &&= '<ANON>';

console.log(rest1);
console.log(rest2);
