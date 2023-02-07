'use strict';

const flight = 'lh232';
const sergio = {
  name: 'Sergio Julio',
  passport: 234354356,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'dh113';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 234354356) {
    alert('check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, sergio);
console.log(flight);
console.log(sergio);
//pasar un primitivo a una función es hacer una copia de ese valor en la función
//pasar cualquier otro tipo a una función si nos permite cambiar el original al que apuntamos.
//ejemplo de como cambiamos un campo del objeto y llamamos a una funcion que antes iba pero ahora no
const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(sergio);
checkIn(flight, sergio);
//javascript no tiene pasar por referencia, sólo pasar por valor
