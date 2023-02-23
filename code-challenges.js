// JavaScript Fundamentals – Part 1
/*
 */

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
// Coding Challenge #4
