'use strict';

const ryanair = {
  airline: 'ryanair',
  iataCode: 'RY',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

ryanair.book(233, 'Sergio');
ryanair.book(553, 'Julio');
console.log(ryanair);

const iberia = {
  airline: 'iberia',
  iataCode: 'IB',
  bookings: [],
};
//copiar el método de un objeto a otro, para eso cogemos el método y lo guardamos en una función externa
const book = ryanair.book;
//el book se convierte en un método pero no tiene this donde apuntar, se lo tenemos que indicar cuando lo usemos
//asi no book(23, 'sarah');
//usamos la función call para indicar a que objeto tiene que apuntar el método
book.call(iberia, 23, 'sarah');
book.call(ryanair, 434, 'Maria');
const thai = {
  airline: 'thai',
  iataCode: 'TH',
  bookings: [],
};
book.call(thai, 32, 'Nami');

//método apply, hace lo mismo pero no recibe una lista de argumentos, recibe un Array
const flightData = [433, 'cooper'];
book.apply(thai, flightData);
//Forma ES6 de hacer lo mismo
book.call(thai, ...flightData);
console.log(thai.bookings);

//BIND, para evitar tener que poner todo el rato el nombre del objeto al que referenciamos con el método
const bookTH = book.bind(thai);
const bookIB = book.bind(iberia);
bookTH(23, 'lele');
bookIB(25, 'lfsd');

//Poniendo más parametros por defecto para un bind
const bookIB23 = book.bind(iberia, 23);
bookIB23('Sergio');
bookIB23('adsd');

//With event listeners
thai.planes = 300; //añadiendo propiedad al objeto thai
thai.buyPlane = () => {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', thai.buyPlane.bind(thai));
console.log(thai);

//Partial application
//podemos presetear parámetros

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 100));
//Usamos null porque no tiene this donde apuntar
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

//Ejercicio de función retornando función
const addTaxRate = rate => value => value + value * rate;
const addVat2 = addTaxRate(0.23);
console.log(addVat2(200));
