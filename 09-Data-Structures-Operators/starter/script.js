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
  //Función retornando un array
  order: function (starterIdex, mainIndex) {
    return [this.starterMenu[starterIdex], this.mainMenu[mainIndex]];
  },
};

///Destructuring
//Ejemplo Sin destructurar
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Desestructurando un array
const [x, y, z] = arr;
console.log(x, y, z);
//el array original no se destruye
console.log(arr);

//destructurando los elementos de un array creado, no tienen que por que ser todos los elementos que contiene el array
const [first, second] = restaurant.categories;
console.log(first, second);
//para sacar elementos que no sean continuos, dejamos un hueco
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Si queremos intercambiar elementos,
//forma de hacer sin destructurar
// let temp = main;
// main = secondary;
// secondary = temp;
//Forma de hacerlo destructurando
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Función retornando un array y a continuación destructurar el resultado en diferentes variables, así podemos obtener múltiples valores de una función

//Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//¿Que pasa si tenemos un nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
//Que pasa si queremos todos los valores individuales? Hacemos destructuring dentro de un destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
