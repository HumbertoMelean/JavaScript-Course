'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 500);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtamn',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log(`hi`);
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('hello')('wo');

// Arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('hello1')('wo1');

const lufthansa = {
  airline: 'lufthansa',
  iata: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iata}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iata}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Beto');
lufthansa.book(123, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iata: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'sarah williams');

// Call Method

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 111, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air',
  iata: 'LX',
  bookings: [],
};

book.call(swiss, 585, 'johnnny boi');
console.log(swiss);

const flightData = [583, 'George Cooper'];
// APPLY METHOD
// book.apply(swiss, flightData);
// console.log(swiss);

book.call(swiss, ...flightData);

// BIND Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven William');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('testing 123');
bookEW23('testing 456');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// addTax = value => value + value * 0.23;

console.log(addVat(100));
console.log(addVat(23));

const tax = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};
const addVat2 = tax(0.23);
addVat2(100);
addVat2(23);

const runOnce = function () {
  console.log('This will never run again');
};

// IIFE
(function () {
  console.log('This will never run again2');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will never run again3'))();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passenger Count`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
