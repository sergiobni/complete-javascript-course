'use strict';

const booked = [];

const createBooking = (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) => {
  //antigua forma de poner default parameters
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;

  const booking = {
    //usando enhanced object literal
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  booked.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 500);
createBooking('LH123', 4);
//también podemos poner en los valores por defectos operaciones e incluso los valores de variables, ojo con el orden de lor argumentos.
//No podemos saltar los argumentos cuando llamamos la función, si queremos dejar un parametro por defecto, tenemos que llamar con undefined
createBooking('RY292', undefined, 1000);
const ac = () => {
  var i = 1;
  var j = 0;
  while (i < 7) {
    j += i;
    i += 2;
  }
  return console.log(j);
};
ac();
