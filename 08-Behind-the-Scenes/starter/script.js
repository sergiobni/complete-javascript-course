'use strict';
/*
//Scope practice

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    //Chequea si la persona es milenial
    if (birthYear >= 1981 && birthYear <= 1996) {
      var milenial = true;
      const firstName = 'Steven'; //Prevalece la definición realizada en el scope actual, no busca fuera si ya está definida
      const str = `Oh, and you're a millenial, ${firstName}
         `;
      console.log(str);
      //comprobando que las funciones son block scoped
      function add(a, b) {
        return a + b;
      }
    }
    console.log(milenial); //Podemos acceder a esta variable porque var es function scope, no block scope como let o const
    //add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'Sergio';
calcAge(1992); //Ejecuta el contenido de la función
//console.log(calcAge(1992)); //Ejecuta la función y muestra lo que retorna en la consola


//Hoisting practice

console.log(me);
// console.log(job); //no se puede acceder antes de la inicializacion
// console.log(year);

var me = 'Sergio';
let job = 'it';
const year = 1992;

//functions
console.log(addDec(2, 3));
//console.log(addExpr(2, 3)); //No se puede acceder antes de la inicialización
//console.log(addArrow(2, 3));

//La única función que se puede utilizar antes de declarar es la función declarativa, la primera

function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//ejemplo de como se puede liar con los undefind
if (!numberProducts) deleteShoppingCart(); //cuando no hay productos elimina el carrito
var numberProducts = 10;
//Aunque tenemos productos en el carrito se eliminan todos, ya que en el punto anterior el número de productos aún es indefinido, y eso es por como funciona hoisting con var, en este caso undefined es falso
function deleteShoppingCart() {
  console.log('All products deleted');
}


//This keyword

console.log(this); //llama al objeto ventana

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); //aparecerá undefined por que no se ha definido en la función y como usamos strict mode no será capaz de llegar al this superior utilizando scope
};
calcAge(1992);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); //En este caso el this apunta al window porque arrow function no tiene la capacidad de contener this, y por defecto utiliza el this de su padre
};
calcAgeArrow(1992);

const sergio = {
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
sergio.calcAge(); //Sergio es el dueño del método y dentro del método this es el objeto sergio, de forma que this apunta a ese objeto.
//this llamará al objeto que está llamando el método!!!

//Otro caso que muestra este comportamiento

const matilda = {
  year: 2019,
};

matilda.calcAge = sergio.calcAge; //Method borrowing, copiando un método de un objeto a otro.
matilda.calcAge(); //Aunque se ha copiado el método de otro objeto, el this de matilda apunta a las propiedades del objeto matilda

const sergio = {
  firstName: 'Sergio',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
sergio.greet(); //Como arrow function no tiene sus propias this, utilizará el this del global scope (windows object)
//Tener en cuenta que los objetos no funcionan como un block scope, sino como un object literal

//____!!! Como best practice nunca usar una arrow function como método
*/

//Primitives and objects in practice

let lasName = 'Williams';
let oldLastName = lasName;
lasName = 'Davis';
console.log(lasName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
//Realmente estamos copiando la referencia al objeto original
const marriedJessica = jessica;
marriedJessica.lastName = 'Wiliarda';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

//Si queremos copiar un objeto pudiendo modificar el contenido de uno independientemente del original

const jessicaCopy = Object.assign({}, jessica); //Fusiona 2 objetos y crea uno nuevo, (el primero es vacio)

jessicaCopy.lastName = 'Davis';
console.log('Before', jessica);
console.log('After', jessicaCopy);
//Esta técnica de copiar sólo copia el primer nivel, si tenemos un objeto dentro del objeto nos encontraremos con el mismo problema de que apuntará a la misma dirección en memoria que el original, es decir, hace una copia shallow o poco profunda.
