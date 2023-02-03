'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'TAP air portugal';
const plane = 'A320';

//obtener el caracter de un string en cierta posicion
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('b737'[0]);

console.log(airline.length);
console.log('B737'.length);
//obtener la posición en la que está cierta letra, nos dara la primera ocurrence
console.log(airline.indexOf('r'));
//Para obtener la posición en la ultima ocurrence
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.indexOf('Portugal'));

//extraer parte de un string usando slide
console.log(airline.slice(4)); //se indica la posición en la cual la extracción comienza
//especificar el principio y final de lo que queremos extraer
console.log(airline.slice(4, 9)); //para de extraer antes de llegar al último índice.

//extrayendo la primera palabra de una frase sin conocer previamente cual es la fraase
console.log(airline.slice(0, airline.indexOf(' ')));
//sacar la última palabra
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//empezar a extraer desd el final especificando un slice negativo
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//funcion que recibe una posición del asiento y diga en qué posicion se encuentre
const checkMiddleSeat = seat => {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky!');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
checkMiddleSeat('11B');

//aunque un string sea un primitivo, podemos aplicarles metodo porque al llamar un string con un método javascript automaticamente hace el proceso llamado "Boxing", o convertir el string para que podamos usarlo como un objeto, cuando la operación se termina, el objeto vuelve a transformarse en un primitivo automaticamente.

//cambiando mayusculas de un string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAs';
//el primer paso es poner todo en lowercase
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
//Para poner la primera letra en mayusculas, cogemos la primera letra y la hacemos mayúscula, luego cogemos el resto del string y concatenamos con la primera letra
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const inicial = string =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();
console.log(inicial('MDASdsdsD'));

//comparing emails
const email = 'hello@sergio.sj';
const loginEmail = ' Hello@sergio.SJ \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //elimina espacios
console.log(trimmedEmail);
//todo junto
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//replacing
const priceGB = '266,334€';
const priceUS = priceGB.replace(',', '.').replace('€', '$');
console.log(priceUS);
const announcement = 'All passengers board 23';
const announcement2 = announcement.replace('board', 'gate');
console.log(announcement2);

//booleans
const planea = 'Airbus A320neo';
console.log(planea.includes('A320'));
console.log(planea.includes('boeing'));
console.log(planea.startsWith('Air'));

if (planea.startsWith('Airbus') && planea.endsWith('neo')) {
  console.log('the new plane');
}

//practice exercise
const checkBaggage = items => {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You cant get in');
  } else console.log('welcome aboard!');
};

checkBaggage('laoptop, food, knife');
checkBaggage('camera, bag');
checkBaggage('gun');

//Dividie un string mediante la indicación de un caracter y coloca los trozos en un array
console.log('a+very+messy+string'.split('+'));
console.log('Sergio Julio'.split(' '));

//destructurando para crear variables
const [firstName, lastName] = 'Sergio julio'.split(' ');

//join
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//primeras letras con mayúsculas
const capitalizarNombre = name => {
  const names = name.split(' ');
  //array donde meter las palabras que se van procesando
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toLowerCase() + n.slice(1));
    //otra forma de hacer reemplazando la primera letra con la letra en mayúscula sin tener que hacer slices y concatenar
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizarNombre('jessica ann smith davis');
capitalizarNombre('sergio julio');

//padding un string, añadir un número de caracteres a un string hasta que tenga un largo deseado
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));
console.log('Sergio'.padStart(25, '+'));
console.log(message.padEnd(25, '+'));
console.log('Sergio'.padEnd(25, '+'));

//enmascara simbolos, queremos sacar los últimos 4 numeros y enmascarar el resto
const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4564646884687));
console.log(maskCreditCard('6857464168765'));

//método repeat
const mesage2 = 'Mal tiempo, todos retrasados';
console.log(mesage2.repeat(4));

const planesInLine = n => {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(2);
planesInLine(1);

//PARA MAS INFORMACIÓN CONSULTAR LOS METODOS QUE APARECEN EN MDN PARA STRINGS

//usando el flights del inicio del documento

//creando un array con cada elemento que es separado por un +
console.log(flights.split('+'));
//para obtener cada elemento en texto plano
// for (const flight of flights.split('+')) {
//   console.log(flight);
// }
//para separar cada elemento de cada entrada del array
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_D') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}
