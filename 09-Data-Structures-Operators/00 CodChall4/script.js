'use strict';
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
//Sacando obteniendo los strings que queremos procesar y guardamos en un array con .split
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  //Procesando el array con los strings, destructuramos cada elemento del array, por cada entrada del array destructuramos el texto y separamos en dos strings a partir de _
  //reemplazamos el primer caracter del segundo string por uppercase

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    //imprimimos en consola el texto procesado junto con un padEnd de 20 y un emomji que se repite por cada posición del elemento inicial del array
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
