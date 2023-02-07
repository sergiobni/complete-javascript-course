'use strict';
const secureBooking = () => {
  let passengerCount = 0;
  return () => {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//la variable guarda en su propia memoria las variables de la función desde que nacen, aunque el contexto de ejecución desaparezca, los valores que contienen las variables se mantienen en caso de que vuelva a llamarse la función.
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

//ejemplos

let f;
//Se declara una variable global, luego la asignamos dentro de una función en un contexto de ejecución, y al terminar el contexto de ejecución f mantiene las propiedades que le hemos asignado.
const g = () => {
  const a = 23;
  f = () => {
    console.log(a * 2);
  };
};
g(); //lamamaos la función que asigna valores a f
f();

const h = () => {
  const b = 444;
  f = () => {
    console.log(b * 2);
  };
};
h(); //se llama a la función que cambiará el valor anterior de f
f();

//otro ejemplo, usando un timer
const boardPassenger = (n, wait) => {
  const perGroup = n / 3;
  setTimeout(() => {
    console.log(`Boarding all ${n} passengers`);
    console.log(`There are 3 grups, each with ${perGroup} passengers`);
  }, wait * 1000); //función que se ejecutará despues de 1000 ms
  console.log(`Will start boarding in ${wait}`);
};
//el set timeout se ejecuta independientemente de la función en la que es llamado, pero mantiene las variables que le ha pasado al crearse

boardPassenger(180, 3);
