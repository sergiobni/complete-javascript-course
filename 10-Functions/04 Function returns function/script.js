'use strict';

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};
//creando una función que retorna lo que retorna la priemra función que a la que llama
const greaterHey = greet('Hey');

greaterHey('Sergio');
//todo de una, sin necesidad de guardar el paso intermedio
greet('hola')('Sergio');

//arrow function con esta metodologia
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('hola')('Sergio');
