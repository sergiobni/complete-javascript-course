'use strict';
/*
//funciones

function logger() {
  console.log('hola');
}

logger(); //invocar la función
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

fruitProcessor(3, 5);
console.log(fruitProcessor(4, 5)); //Para obtener el return hay que guardar el valor en un campo.

const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(5, 6);

//Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1992);

//function expression
const calcage2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcage2(1992);
console.log(age1, age2, calcage2(1992));


//ARROW FUNCTION

//function expression
const calcage2 = function (birthYear) {
  return 2023 - birthYear;
};
//arrow function

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirementAge = 65 - age;
  return `${firstName} retirnes in ${retirementAge} years`;
};
console.log(yearsUntilRetirement(1992, 'Sergio'));
console.log(yearsUntilRetirement(1990, 'Pepe'));


//FUNCTION CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = (birthYear) => 2023 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirementAge = 65 - age;
  if (retirementAge > 0) {
    return retirementAge;
  } else {
    return -1;
  }
};
console.log(yearsUntilRetirement(1950, 'Sergio'));


//Challenge 1

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const scoreD = calcAverage(85, 54, 41);
const scoreK = calcAverage(23, 34, 27);

const checkWinner = (s1, s2) =>
  s1 > 2 * s2 ? 'Winner is Dolphins' : 'Winner is Koalas';

const checkWinner2 = function (s1, s2) {
  if (s1 > 2 * s2) {
    return 'Dolphin wins';
  } else if (s2 > 2 * s1) {
    return 'Koalas wins';
  } else return 'No one wins';
};

console.log(checkWinner2(scoreD, scoreK));
console.log(checkWinner2(1, 2));

//Introduction to arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
//otra forma de hacer arrays
const y = new Array(1992, 1993, 1994);
console.log(y);

//Para obtener el elemento en la posición 0 del array
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

//Obtener el número de elementos del array (no basa en 0)
console.log(friends.length);
//Obtener el último elemento del array
//estamos poniendo una expresión que calcula la posición del elemento que queremos obtener y luego se llama a esa posición para obtener el valor del array
console.log(friends[friends.length - 1]);

//cambiar los valores del array o mutarlo
friends[2] = 'Jay';
console.log(friends);

//un array no es un valor primitivo, por eso podemos mutarlo aunque lo declaremos a una variable de tipo const. Lo que no podríamos hacer es cambiar todo el array directamente

const firstName = 'Sergio';
const sergio = [firstName, 'Julio', 2023 - 1992, friends];
console.log(sergio);

//ejercicio

const calcage = function (birthYear) {
  return 2023 - birthYear;
};

const years = [1990, 1991, 1992, 1993];
//Calcular la edad para cada elemento del array
const age1 = calcage(years[0]);
const age2 = calcage(years[1]);
const age3 = calcage(years[years.length - 1]);

console.log(age1, age2, age3);
//meter en un array los resultados del calculo de edad
const ages = [
  calcage(years[0]),
  calcage(years[1]),
  calcage(years[years.length - 1]),
];
console.log(ages);

//métodos para arrays

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); //introducir un nuevo elemento al final
const newLenght = friends.push('pepe'); //podemos obtener el número de elementos
console.log(friends);
console.log(newLenght);

friends.unshift('Maria'); //añadir elemento al principio del array
console.log(friends);

friends.pop(); //elimina el último elemento del array
const popped = friends.pop(); //Guarda el elemento que se elimina
console.log(friends);
console.log(popped);

friends.shift(); //elimina el primer elemento del array
console.log(friends);

console.log(friends.indexOf('Steven')); //obtiene el índice donde se localiza el elemento

console.log(friends.includes('Steven')); //retorna true si existe

//El uso más común del método includes
if (friends.includes('Peter')) {
  console.log('Tienes un amigo que se llama peter');
}


//Coding challenge 2

const calcTip = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(calcTip(300));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, total);


//Introduction to objects

//esta sería la forma de hacer un array pero se ordena con números queremos ordenarlos de otra forma
const sergioArray = [
  'sergio',
  'julio',
  2023 - 1992,
  'it',
  ['Michael', 'Peter', 'Steven'],
];

//lo hacemos con un objeto
//utilizamos objetos para tener la información ordenada por nombres, los arrays serían para información ordenada por número fijo
const sergio = {
  firstName: 'Sergio',
  lastName: 'Julio',
  age: 2023 - 1992,
  job: 'it',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(sergio);
//ejemplo de obtener un valor de un array
console.log(sergio.lastName);
console.log(sergio['lastName']); //es lo mismo que lo anterior, y además podemos escribir expresiones
//ejemplo de como utilizar expresiones para obtener propiedad del objeto
const nameKey = 'Name';
console.log(sergio['first' + nameKey]);
//ejemplo en el que creamos una constante donde se guarda la propiedad del objeto que pedimos al usuario, luego lo pasaremos al objeto para obtener su contenido.
const interestedIn = //prompt
  'Que quieres saber? firstName, lastName, age, job o friends';
console.log(sergio[interestedIn]); //utilizamos corchetes por que nos permiten utilizar expresiones, en este caso llamar al objeto con el contenido de la constante, que contiene la propiedad.

//Si la propiedad que pedimos existe o no
if (sergio[interestedIn]) {
  console.log(sergio[interestedIn]);
} else {
  console.log('Wrong request');
}
//añadiendo nuevas propiedades al objeto
sergio.location = 'Españita';
sergio['twitter'] = '@sergio';
console.log(sergio);
//Challenge
//Sergio tiene 3 amigos y su mejor amigo es Michael,
console.log(
  `${sergio.firstName} tiene ${sergio.friends.length} amigos, y su mejor amigo se llama ${sergio.friends[0]}`
);


//Object methods

const sergio = {
  firstName: 'Sergio',
  lastName: 'Julio',
  birthYear: 1992,
  job: 'it',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  //aquí tenemos el método
  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // //método que llama a propiedades del mismo objeto
  // calcAge: function () {
  //   console.log(this); //ejemplo de lo que contiene el this (todo el objeto)
  //   return 2023 - this.birthYear;
  // },

  //método que crea una nueva propiedad en el objeto y retorna el contenido
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  description: function () {
    return `${this.firstName} is a ${this.age} old ${this.job} and he has ${
      this.hasDriversLicense ? 'a' : 'not'
    } drivers license`;
  },
};

//llamar al método de un objeto
//sergio.calcAge(1991);
//sergio['calcAge'](1991); //también podemos acceder mediante corchetes
console.log(sergio.calcAge());
console.log(sergio.age);

//challenge
//"Sergio is a 30 years old it, and he has a/no drivers license"
console.log(sergio.description());


//Coding challenge 3

const Mark = {
  fullName: 'Mark',
  mass: 78,
  height: 1.69,
  //creamos un método que crea un nuevo parámetro con la información, pero ojo, para que se cree el parámetro tendrá que haberse llamado al método al menos 1 vez
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const John = {
  fullName: 'John',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
//
Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi);
console.log(John.bmi);

if (Mark.bmi > John.bmi) {
  console.log(
    `${Mark.fullName}'s BMI ${Mark.bmi} is higher than ${John.fullName}'s ${John.bmi}!`
  );
} else if (John.bmi > Mark.bmi) {
  console.log(
    `${John.fullName}'s BMI ${John.bmi} is higher than ${Mark.fullName}'s ${Mark.bmi}!`
  );
} else console.log('Both have the same BMI!');


//The for loop
//el for loop continua mientras la condición sea true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const sergioArray = [
  'sergio',
  'julio',
  2023 - 1992,
  'it',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = []; //creando un array para rellenarlo luego en el bucle
for (let i = 0; i < sergioArray.length; i++) {
  //leyendo el array
  console.log(sergioArray[i], typeof sergioArray[i]);

  //rellenando el array
  //types[i] = typeof sergioArray[i];
  //otra forma de rellenar el array
  types.push(typeof sergioArray[i]);
}
console.log(types);

//calcular las fechas de todos los años y guardarlas en un nuevo array

const years = [1992, 1993, 1994, 1995];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

//statements for loops: continue and break

//continue sólo permite las iteraciones que cumplen los parametros que queremos, descartando las demás
console.log('---------Only strings');
for (let i = 0; i < sergioArray.length; i++) {
  if (typeof sergioArray[i] !== 'string') continue;
  console.log(sergioArray[i], typeof sergioArray[i]);
}

//break detiene el circuito completamente cuando se da una condición especificada
console.log('--------Break with object');
for (let i = 0; i < sergioArray.length; i++) {
  if (typeof sergioArray[i] === 'object') break;
  console.log(sergioArray[i], typeof sergioArray[i]);
}


//Loop array backwards

const sergio = [
  'sergio',
  'julio',
  2023 - 1992,
  'it',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = sergio.length - 1; i >= 0; i--) {
  console.log(i, sergio[i]);
}

//Loop inside a loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting excercise ${exercise} `);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Excercise ${exercise}: Lifting weights repetition ${rep}`);
  }
}

//While loop

let reps = 1;
while (reps <= 10) {
  console.log(`While: Lifting weights repetition ${reps}`);
  reps++;
}
//ejemplo, math random nos da un numero entre 0 y 1
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`Not six is ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop ended');
}


//Coding challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

calcTip();
console.log(tips, totals);

//Bonus
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));


//Problem

//Given an array of temperatures of a day, calculate the amplitude. Sometimes there are errors.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1 understanding the problem: What is amplitude? The difference between highest and lowest temp

//2 Breaking up into sub problems
//How to ignore errors
//-Find max temp in the array
//Find min temp in the array
//Restar min al max y devolver el resultado

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp != 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 5, 6, 1, 5]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2
//function should now receive 2 arrays of problem
//Do we need to implement the same functionality twice?
//No, just merge two arrays, How to merge them? concat method

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp != 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitudeNew([3, 5, 6, 1, 5], [0, 2, -3, 9, 5]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 6, 1, 5], [0, 2, -3, 9, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C Fix the problem
    value: Number(prompt('Degrees celsius:')),
  };
  //B Identifying the problem
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug
console.log(measureKelvin());

//

//array de máximas, pasar en un string único cada valor del array y acompañarlo de texto.

const printForecast = (arr) => {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  return string;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
*/
