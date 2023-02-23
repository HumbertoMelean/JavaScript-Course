// JavaScript Fundamentals – Part 1
/*

// Coding Challenge #1

const markOneWeight = 78;
const markOneHeight = 1.69;
const johnOneWeight = 92;
const johnOneheight = 1.95;

const markTwoWeight = 95;
const markTwoHeight = 1.88;
const johnTwoWeight = 85;
const johnTwoheight = 1.76;

let markBMIone, johnBMIone, markBMItwo, johnBMItwo;

markBMIone = markOneWeight / markOneHeight ** 2;
johnBMIone = johnOneWeight / johnOneheight ** 2;

console.log(markBMIone, johnBMIone);

const markHigherBMIone = markBMIone > johnBMIone;
console.log(markHigherBMIone);

markBMItwo = markTwoWeight / markTwoHeight ** 2;
johnBMItwo = johnTwoWeight / johnTwoheight ** 2;

console.log(markBMItwo, johnBMItwo);

const markHigherBMItwo = markBMItwo > johnBMItwo;
console.log(markHigherBMItwo);

// Coding Challenge #2
if (markHigherBMIone) {
  console.log(`Mark's BMI ${markBMIone} is higher than John's!`);
} else {
  console.log(`John's BMI ${johnBMIone} is higher than Mark's!`);
}
if (markHigherBMItwo) {
  console.log(`Mark's BMI ${markBMIone} is higher than John's!`);
} else {
  console.log(`John's BMI ${johnBMItwo} is higher than Mark's!`);
}
// Coding Challenge #3
// Test data:
//  Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//  Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphinGameOne = 99;
let dolphinGameTwo = 99;
let dolphinGameThree = 99;
const dolphinsAverageScore =
  (dolphinGameOne + dolphinGameTwo + dolphinGameThree) / 3;

let koalasGameOne = 99;
let koalasGameTwo = 99;
let koalasGameThree = 99;
const koalasAverageScore =
  (koalasGameOne + koalasGameTwo + koalasGameThree) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log(`Dolphins Win!`);
} else if (
  dolphinsAverageScore < koalasAverageScore &&
  koalasAverageScore >= 100
) {
  console.log(`Koalas Win!`);
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= 100
) {
  console.log(`Its a draw`);
} else {
  console.log(`No one wins...`);
}

// Coding Challenge #4
 */
