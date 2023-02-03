'use strict';

//Un set es una colección de valores únicos
//le pasamos un iterable (array)
const ordersSet = new Set(['pasta', 'pizza', 'risotto', 'pasta', 'pizza']);
console.log(ordersSet); //no muestra los duplicados

console.log(new Set('Sergio')); //un string también es iterable

//Podemos obtener el size del set, con la cantidad de valores únicos
console.log(ordersSet.size);
//comprobar si un elemento esta dentro de un set
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
//Añadir nuevos elementos a un sert
ordersSet.add('Cebolla');
ordersSet.add('Cebolla'); //Los duplicados se ignoran
console.log(ordersSet);
//eliminar elementos
ordersSet.delete('risotto');
console.log(ordersSet);

//looping un set
for (const order of ordersSet) console.log(order);

//eliminar todos los elementos
ordersSet.clear();
console.log(ordersSet);

//Ejemplo
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
//crear un array sin duplicados
const staffUnique = new Set(staff);
console.log(staffUnique);
//convirtiendo el set a un array
const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2);

//contar las palabras de un string
console.log(new Set('sergiojuliogarcia').size);
