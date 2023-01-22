'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//Como el query selector sólo selecciona el primero si buscamos una clase, para seleccionar todos usamos el All
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

//Función para mostrar el modal
const mostrar = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Función para ocultar el modal
const ocultar = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  //Seleccionado todos los botones y añadiendo funcionalidad cuando se pincha uno de ellos
  btnShowModal[i].addEventListener('click', mostrar);
  //Ponemos la función sin llamar (), ya que queremos que se ejecute sólo cuando el click del evento ocurra
  btnCloseModal.addEventListener('click', ocultar);
  //Hacer que se cierre el modal al pinchar en el overlay que se ha generado al abrir el modal
  overlay.addEventListener('click', ocultar);
}
//Cerrar el modal con la tecla escape
//Cualquier tecla activará el evento, para conocer la tecla que se ha pulsado la pasamos como parámetro a la función.
document.addEventListener('keydown', event => {
  console.log(event.key); //acedemos a la tecla que se pulsa dentro del objeto que se crea en keydown
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    ocultar();
  }
});
