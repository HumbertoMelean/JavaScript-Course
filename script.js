/*
// ### 010 Values and Variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
// This is better than
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// ### 012 Data Types~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let javascriptIsFun = true;
// console.log(true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
// Both are undefined
// Undefined is the Value and the type
year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
// BUG*** shows Object as type 


// ### 013 let, const and var~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let age = 30;
age = 31;

const birthYear = 1991;
// birthyear = 1990
// Cannot be re-assigned

// const job;
// Has to have a variable

var job = "programmer";
job = "teacher";

lastName = "Melean";
console.log(lastName);
// ### 014 Basic Operators ~~~~~~~~~~~~~~~~~~~~~~~~~~~

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
// Can CL multiple variables by seperating with comma

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2 ** 3 means 2 to the power of 3.

const firstName = "Humberto";
const lastName = "Melean";
console.log(firstName + " " + lastName);
// Concatenation of strings

let x = 10 + 5; // 15
x += 10; // x = x + 10
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// ### 015 Operator Precedence~~~~~~~~~~~~~~~~~~~~~~~~~

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);
// 10 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// ### 016 Coding Challenge #1

// ### 017 Strings and Template Literals~~~~~~~~~~~~~~~~~~~~~~~~~~

const firstName = "Beto";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const beto =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(beto);

const betoNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(betoNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);

// ### 018 Taking Decisions_ if _ else Statements~~~~~~~~~~~~~~

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start her driving license exam 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
// ### 020 Type Conversion and Coercion~~~~~~~~~~~~~~~~~~

// TYPE CONVERSION
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Jonas"));
// NaN - Invalid Number

console.log(String(23), 23);

// TYPE COERCION
console.log(`I am ${23} years old`);
console.log(`I am 23 years old`);
// Both of these are the same

console.log("23" - "10" - 3);
// 10
console.log("23" + "10" + 3);
// 23103
console.log("23" / "2");
// 11.5

let n = "1" + 1;
n = n - 1;
console.log(n);
// 10

*/
// ### 021 Truthy and Falsy Values~~~~~~~~~~~~~~~~~~~~

console.log(Boolean(0));
// false
console.log(Boolean(undefined));
// false
console.log(Boolean("jonas"));
// true
console.log(Boolean({}));
// true
console.log(Boolean(""));
// false

const money = 0;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`Get a job`);
}
// 0 is a falsy value

const money1 = 1;
if (money1) {
  console.log(`Don't spend it all`);
} else {
  console.log(`Get a job`);
}
// 1 is a truthy value

let height;
if (height) {
  console.log(`Yay, height is defined`);
} else {
  console.log(`Height is not defined aka UNDEFINED`);
}
// height has a falsy value
