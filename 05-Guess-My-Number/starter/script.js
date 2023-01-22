'use strict';
/*
//Obteniendo el contenido de una clase en html
console.log(document.querySelector('.message').textContent);
//Cambiando el contenido
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


//Definiendo el número secreto
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Definiendo la puntuación
let score = 20;

//Definiendo highscore
let highscore = 0;

//Haciendo responder al botón

document.querySelector('.check').addEventListener('click', () => {
  //guardamos el valor que se introduce en el formulario y lo convertimos a tipo number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Si el número que hemos introducido es 0 o nada, el primer escenario a contemplar es el cual no se introduce nada en el formulario y se envia
  if (!guess) {
    //No input
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    //Player wins
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Seleccionar y cambiar el css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    //Guess too high
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //Guess too low
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Play again
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.score').textContent = '20';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

*/

////REFACTORING

//Definiendo el número secreto
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Definiendo la puntuación
let score = 20;

//Definiendo highscore
let highscore = 0;

//Funciones que refactorizan BOM
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayNumber = number =>
  (document.querySelector('.number').textContent = number);
const displayScore = score =>
  (document.querySelector('.score').textContent = score);
//Haciendo responder al botón

document.querySelector('.check').addEventListener('click', () => {
  //guardamos el valor que se introduce en el formulario y lo convertimos a tipo number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Si el número que hemos introducido es 0 o nada, el primer escenario a contemplar es el cual no se introduce nada en el formulario y se envia
  if (!guess) {
    //No input
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    //Player wins
    displayMessage('Correct!');
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    score = 20;
    //Seleccionar y cambiar el css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number too high!' : 'Number too low!'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

//Play again
document.querySelector('.again').addEventListener('click', () => {
  displayScore(20);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
  document.querySelector('.guess').value = '';
});
