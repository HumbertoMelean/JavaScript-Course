/*
 */

console.log("Assignment File");

// LECTURE: Values and Variables

// let country = "United States";
// let continent = "North American";
let population = 350000000;

// LECTURE: Data Types

let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(language);
// Result

// false
// assignments.js:17 350,000,000
// assignments.js:18 United States
// assignments.js:19 undefined

// LECTURE: let, const and var

language = "English";
const country = "United States";
const continent = "North America";

// continent = "asia";
// Error occurs
// Uncaught ReferenceError: Cannot access 'country' before initialization

// LECTURE: Basic Operators

console.log(population / 2);
console.log(population++);
console.log(6000000 < population);
console.log(33000000 < population);
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;
console.log(description);

// LECTURE: Strings and Template Literals
const description2 = `${country} is in ${continent}, and its ${population} people speak ${language}
template literal`;
console.log(description2);

// LECTURE: Taking Decisions: if / else Statements
if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s populations is ${33000000 - population} below average`
  );
}
// LECTURE: Type Conversion and Coercion

console.log("9" - "5");
// 4
console.log("19" - "13" + "17");
// 617 - STRING
console.log("19" - "13" + 17);
// 23;
console.log("123" < 57);
// false
console.log(5 + 6 + "4" + 9 - 4 - 2);
// 1143
// LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(
//   prompt(`How many neighbour countries does your country have?`)
// );
// if (numNeighbours === 0) {
//   console.log(`No borders`);
// } else if (numNeighbours === 1) {
//   console.log(`Only 1 border!`);
// } else {
//   console.log(`More than 1 border`);
// }
// LECTURE: Logical Operators
if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
// LECTURE: The switch Statement

// LECTURE: The Conditional (Ternary) Operator
