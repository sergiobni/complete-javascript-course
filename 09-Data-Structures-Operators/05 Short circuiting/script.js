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
//Propiedades los operadores lógicos, pueden usar cualquier tipo de dato, retornar cualaquier tipo de dato y hacer corto circuitos
console.log(3 || 'Sergio'); //Si el primer operador es verdadero lo retornará y el segundo operador no llegará a evaluarse
console.log('' || 'Sergio');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hola' || 23 || null);

//Ejemplo de uso sin short circuiting, si existe hacemos o no
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
//Ejemplo con short circuiting
const guest2 = restaurant.numGuests || 10;
console.log(guest2);
//OJO por que este caso no funcionará cuando el número por defecto sea 0 ya que será falso

//SHORT CIRCUITING CON AND && OPERATOR
//Retorna el operador cuando es falso, es el caso contrario del OR ||
//Cuando los dos son verdaderos retorna el último
console.log(0 && 'Sergio');
console.log(7 && 'Sergio');
console.log(7 && 'Sergio' && null && 88);
//Caso sin usar &&
if (restaurant.orderPizza) {
  restaurant.orderPizza('pepinos', 'queso');
}
//Caso usando &&
restaurant.orderPizza && restaurant.orderPizza('pepe', 'papa');
