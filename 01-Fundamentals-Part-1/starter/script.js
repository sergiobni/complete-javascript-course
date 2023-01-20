/* //values and variables

console.log('sergio');
console.log(23);

let firstName = 'sergio'; //variable escrita en camelCase
//utilizar variables que sean descriptivas
console.log(firstName);
console.log(firstName);

//tarea

const country = 'españita';
const continent = 'europa';
const population = 50;
console.log(country, continent, population);


//Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'hehe');
console.log(typeof 23);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);
console.log(typeof null); //error de javascript


//coding challenge 1

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 85;
const johnHeight = 1.9;

const BMIMark = markWeight / markHeight ** 2;
const BMIJhon = johnWeight / johnHeight ** 2;
const markHeigherBMI = BMIMark > BMIJhon;
console.log(
  `BMI mark es ${BMIMark} - BMI jhon es ${BMIJhon} - ${markHeigherBMI}`
);


//string and template literals

const firstName = 'Sergio';
const job = 'it';
const birthYear = 1992;
const currentyear = 2023;

const sergio = `Soy ${firstName} un ${job} de ${currentyear - birthYear} años`;

console.log(sergio);

console.log(
  'String with \n\
multiple \n\
lines'
);

console.log(`String
with
multiple
lines`);



//Decisions statements IF

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license😊`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara can't start driving yet 😢`);
  console.log(`${yearsLeft} years left to being able!`);
}

const birthYear = 1992;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//SECOND CHALLENGE
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 85;
const johnHeight = 1.9;

const BMIMark = markWeight / markHeight ** 2;
const BMIJhon = johnWeight / johnHeight ** 2;
let higherBMI;
if (BMIMark > BMIJhon) {
  higherBMI = `Mark BMI is higher`;
} else {
  higherBMI = `Jhon BMI is higher`;
}
console.log(`BMI mark es ${BMIMark} - BMI jhon es ${BMIJhon} - ${higherBMI}`);



//Conversion and coercion

const inputYear = '1992';
console.log(inputYear + 18);
//convertir el string en un número
console.log(Number(inputYear) + 18);
//Si una operacion que trabaja con números recibe un valor que no es número
console.log(Number('Sergio'));
//convertir number a string
console.log(String(23), 23);
//type coercion
console.log('I am ' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


//Truthy and falsy values

//falsy values; 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sergio'));
console.log(Boolean({})); //Objeto vacío da true

const money = 0;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job`);
}

let height; //Puede ser un problema si se define con 0
if (height) {
  console.log(`Heigh is defined`);
} else {
  console.log(`Height is not defined`);
}


//EQUALITY OPERATORS

const age = 18;
if (age === 18) console.log(`You just became an adult Strict operatos`);
if (age == 18) console.log(`Loose operator`); //el string se convertirá en número

const favourite = Number(prompt('Whats your favourite number?'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('strict');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23');


//Logical operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log(`sarah is able to drive`);
} else {
  console.log(`someone else should drive`);
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`sarah is able to drive`);
} else {
  console.log(`someone else should drive`);
}



//Coding challenge 3

const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
//calculating avg score for each team
console.log(avgDolphins);
console.log(avgKoalas);

//calculating winner
let result;
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  result = `Dolphins wins with ${avgDolphins} points`;
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  result = `Koalas wins with ${avgKoalas} points`;
} else if (avgKoalas === avgDolphins && avgKoalas >= 100) {
  result = `There is a draw`;
} else result = `The minimum score of 100 was not reached`;

console.log(result);



//Switch statement

const day = 'wednesday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('miercoles y jueves');
    break;
  case 'friday':
    console.log('viernes');
    break;
  case 'saturday':
    console.log('sabado');
    break;
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
}



//STATEMENTS VS EXPRESSIONS

3 + 4; //Expression
1992; //Expression
true && false && !false; //Expression

//este if es un statement
if (23 > 10) {
  console.log('hola');
}

console.log(`I'm ${2023 - 1992} years old`); //expression funciona
console.log(`I'm ${if (23 > 10) { //statement no
    console.log('hola');
  }}`);



//Ternary Operator

const age = 15;
const bebida = age >= 18 ? `Dame vino` : `No wine for you`;
console.log(bebida);

*/

//Challenge 4
const bill = 275;
let tip;
tip = bill > 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
