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
  //Método retornando un array para destructurarlo luego
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Método que recibe objetos y desempaqueta
  orderDelivery: function ({
    starterIndex = 1,
    time = '20:00',
    address,
    mainIndex = 0,
  }) {
    console.log(
      `Orden recibida ${this.starterMenu[starterIndex]} y ${this.mainMenu[mainIndex]} a las ${time} en ${address}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Calle falsa',
});

//Desestructurar Objetos
//Escribimos las propiedades que queremos obtener de los objetos
//El orden no importa, el nombre tiene que coincidir
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

//Si queremos que los nombres de las variables sean diferentes al nombre de la propiedad del objeto que queremos obtener

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Destructurar el menu, usamos =[] para establecer un valor por defecto,hacemos lo mismo con starterMenu y le damos otro nombre y también le damos un valor por defecto, en este caso es un array vacio. Si no ponemos un valor por defecto nos aparecería undefined.

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutando variables
let a = 111;
let b = 999;
//Guardamos el objeto en una variable y destructuramos
const obj = { a: 23, b: 32, c: 55 };

//No podemos const {a, b} por que ya está declarado
//Tampoco podemos let {a,b} por que crearia nuevas variables que ya tenemos declaradas
//Queremos mutarlo de manera que a=23 y b=32
//No podemos hacer {a,b} = obj por que no se permite empezar con {} porque JS espera un code block, no podemos asignar nada a un code block, para solucionar este problema el truco es meterlo todo en un parentesis

({ a, b } = obj);
console.log(a, b);

//NEsted object
//Ejemplo con open and close hours
//Utilizamos el objeto con openinghours que hemos destructurado previamente y guardado en una varible
const { fri } = openingHours;
console.log(fri);
//Para obtener concretamente lo que contiene el objeto hacemos lo siguiente
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
//Para obtener lo mismo pero asignar el resultado a variables custom:
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
