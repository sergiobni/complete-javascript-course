'use strict';
//Seleccionando el ID del elemento de varias formas posibles.
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;

//Ocultar el dado, creamos la clase en style.css
diceEl.classList.add('hidden');

//Guardar la puntuación
let currentScore = 0;

//Puntuaciones
const scores = [0, 0];

let playing = true;

//Current player
let activePlayer = 0;

//Cambiar jugador

const cambiarJugador = () => {
  //Cambiar la puntuación del jugador activo a 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //Cambiar current score a 0
  currentScore = 0;
  //Cambiar de jugador activo
  activePlayer = activePlayer === 0 ? 1 : 0;
  //El método toggle mete una clase si no existe previamente, y si existe la quita
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Roll dice
btnRoll.addEventListener('click', () => {
  if (playing) {
    //1Generar una tirada random
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //Mostrar el dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //Chequear si se ha tirado 1, si no cambia al siguiente jugador
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      //Añadiños la puntuación al jugador en activo
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Cambiar el jugador activo
      //Resetear la puntuación
      currentScore = 0;
      cambiarJugador();
    }
  }
});

//Guardar la puntuación
btnHold.addEventListener('click', () => {
  if (playing) {
    //1 añadir puntuación actual al total del jugador en activo
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Comprovar si el jugador ha alcanzado puntuacion 100
    if (scores[activePlayer] >= 10) {
      //Termina el juego
      playing = false;
      //una vez termina oculta los botones
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Cambiar jugador
      cambiarJugador();
    }
  }
});

//Boton new game

btnNew.addEventListener('click', () => {
  playing = true;
  diceEl.classList.remove('hidden');
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
});
