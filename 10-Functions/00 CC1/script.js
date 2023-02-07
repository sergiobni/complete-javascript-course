'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:  C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const respuesta = Number(
      prompt(`${this.question}\n ${this.options.join('\n')}`) //como es un array usamos el join \n para bajar cada linea de texto
    );
    //usando shortcircuiting para añadir en el array cuando las condiciones anteriores se cumplen
    typeof respuesta === 'number' &&
      respuesta < this.answers.length &&
      this.answers[respuesta]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//BONUS con el uso de CALL
poll.displayResults.call({ answers: [4, 1, 0, 1] }, 'string');
