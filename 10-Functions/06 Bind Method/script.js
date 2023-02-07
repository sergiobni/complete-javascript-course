'use strict';

//bind no llama inmediatamente a la función, llama una nueva función donde el this está unido
const thai = {
  airline: 'thai',
  iataCode: 'TH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
const book = thai.book;

const bookTH = book.bind(thai);
bookTH(23, 'lele');
