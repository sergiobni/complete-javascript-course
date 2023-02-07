'use strict';

const oneWord = str => {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...second] = str.split(' ');
  return [first.toUpperCase(), ...second].join(' ');
};
//higher order function, un parametro es funcion callback
const transformer = (str, fn) => {
  console.log(`${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  //obterniendo el nombre de la funcion
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascrip is the best!', upperFirstWord);
transformer('Javascrip is the best!', oneWord);

//ejemplo de un callback en addeventlistener
const high5 = () => {
  console.log('🖖');
};
document.body.addEventListener('click', high5);
//usando callback con método foreach
['sergio', 'marta', 'pepe'].forEach(high5);
