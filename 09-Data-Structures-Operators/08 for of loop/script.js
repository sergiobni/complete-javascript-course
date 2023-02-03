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

//For of loop
//Creando un array con todo el menu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//Para cada elemento dentro de la variable haz
for (const item of menu) console.log(item);

//Para obtener el indice
for (const item of menu.entries()) {
  //console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//haciendolo lo mismo más corto, destructurando
for (const [i, element] of menu.entries()) {
  console.log(`${i + 1}: ${element}`);
}
