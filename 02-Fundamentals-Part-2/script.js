"use strict";
/*

// ### 032 Activating Strict Mode~~~~~~~~~~~~~~~~~~~~~~~~~~~

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
// Without 'use strict' this misspelling would not show up as an error

if (hasDriverLicense) console.log(`I can drive :D`);
// This would return true without 'use strict' mode turned on

const interface = "Audio";
// JS is reserving 'interface' because it may add a feature in the future called interface

// ### 033 Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function logger() {
  console.log(`My name is Beto`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// ### 034 Function Declarations vs. Expressions~~~~~~~~~~~

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
  }
  
  const age1 = calcAge1(1991);
  console.log(age1);
  
  // function expression
  const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
  };
  
  const age2 = calcAge2(1991);
  console.log(age1, age2);

//   ### 035 Arrow Functions~~~~~~~~~~~~~~~~~~~~~~~

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1991, "Beto"));
console.log(yearsUntilRetirement(1980, "Bob"));

// ### 036 Functions Calling Other Functions~~~~~~~~~~~

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`;
  return juice;
}
fruitProcessor(2, 3);

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// ### 037 Reviewing Functions~~~~~~~~~~~~~~~~~~~~~~~~

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  //   return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1991, "Beto"));
console.log(yearsUntilRetirement(1970, "Mike"));


// ### Coding Challenge #1~~~~~~~~~~~~~~~~~~~~~~

// ### 039 Introduction to Arrays~~~~~~~~~~~~~~~~~~~~~~~~~~

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// Literal Syntax
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// New syntax
const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(y[0]);

// .length is not 0 based
// .length is called a 'property' element
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Beto";
const beto = [firstName, "Melean", 2037 - 1991, "teacher", friends];

console.log(beto.length);

// Exercise
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[2]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

// ### 040 Basic Array Operations (Methods)~~~~~~~~~~

// Add Elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

// Returns index
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// Returns if True/ False
// Checks if True in strict equality - No type coercion
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// ### 042 Introduction to Objects~~~~~~~~~~~~~~

// Object literal syntax
const jonas = {
  firstName: "Beto",
  lastName: "Melean",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// ### 043 Dot vs. Bracket Notation~~~~~~~~~~~~~~

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = "Name";
console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);


// ### 044 Object Methods~~~~~~~~~~~~~~~~~~~

const jonas = {
  firstName: "Beto",
  lastName: "Melean",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge is not a variable but an object property
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas);
// console.log(jonas.calcAge(this.birthYear));

console.log(jonas.getSummary());

// ### 045 Coding Challenge #3~~~~~~~~~~~~~~~~~~~~~~

// ### 046 Iteration_ The for Loop~~~~~~~~~~~~~~~~~~~~~~

// console.log(`Lifting weights repetition 1`);
// console.log(`Lifting weights repetition 2`);
// console.log(`Lifting weights repetition 3`);
// console.log(`Lifting weights repetition 4`);
// console.log(`Lifting weights repetition 5`);
// console.log(`Lifting weights repetition 6`);
// console.log(`Lifting weights repetition 7`);
// console.log(`Lifting weights repetition 8`);
// console.log(`Lifting weights repetition 9`);
// console.log(`Lifting weights repetition 10`);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

// ### 047 Looping Arrays, Breaking and Continuing~~~~~~~~~~~~~

const jonas = [
  "Beto",
  "Melean",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue adn break
console.log(`Only Strings_____________`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log(`Only BREAK WITH NUMBER_____________`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}

// ### 048 Looping Backwards and Loops in Loops~~~~~~~~~~

const jonas = [
  "Beto",
  "Melean",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`------- Starting rep ${rep}`);
  }
}

// ### 049 The while Loop~~~~~~~~~~~~~~~~~~

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end`);
}
*/
