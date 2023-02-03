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
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    saturday: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //Función retornando un array para destructurarlo luego
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//sacar las horas de aperturas del lunes, sin saber si abre o no
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//QUe pasa si el restaurante no tiene opening hours
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//Se lia porque puede darse una gran cadena
//Como solucionar esto con optional chaining
console.log(restaurant.openingHours.mon?.open);
//Solo si la propiedad existe se leerá, si no se devolverá undefined
console.log(restaurant.openingHours?.mon?.open); //Si el primero no existe, no continuará comprobando el supuesto hijo y no retornará error

//Ejemplo
const weekdays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];
for (const day of weekdays) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}
//Si el elemento no está en el array devuelve cerrado, y tenemos en cuenta que un elemento puede contener 0, por eso utilizamos nullish coalescing ??

//Métodos con optional chaining

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exist');

//ARRAYS con optional chaining

const users = [{ name: 'Sergio', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');
