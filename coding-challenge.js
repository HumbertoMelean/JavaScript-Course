// JavaScript Fundamentals – Part 2
/*
// Coding Challenge #1

let dolphinGameOne = 44;
let dolphinGameTwo = 23;
let dolphinGameThree = 71;
let avgDolphin;

let koalaGameOne = 65;
let koalaGameTwo = 54;
let koalaGameThree = 27;
let avgKoala;

const calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3;

avgDolphin = calcAverage(dolphinGameOne, dolphinGameTwo, dolphinGameThree);

avgKoala = calcAverage(koalaGameOne, koalaGameTwo, koalaGameThree);

const checkWinner = function (team1, team2) {
  if (team1 > team2 * 2) {
    console.log(`Dolphins win (${team1} vs ${team2})`);
  } else if (team2 > team1 * 2) {
    console.log(`Koalas win (${team2} vs ${team1})`);
  } else {
    console.log(`No Winner`);
  }
};
checkWinner(avgDolphin, avgKoala);
// ``````````````````````````````````````
dolphinGameOne = 85;
dolphinGameTwo = 54;
dolphinGameThree = 41;

koalaGameOne = 23;
koalaGameTwo = 34;
koalaGameThree = 27;

avgDolphin = calcAverage(dolphinGameOne, dolphinGameTwo, dolphinGameThree);

avgKoala = calcAverage(koalaGameOne, koalaGameTwo, koalaGameThree);

checkWinner(avgDolphin, avgKoala);


// Coding Challenge #2

const bills = [125, 555, 44];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    tips.push(tip);
    totals.push(bill + tip);
  } else {
    let tip = bill * 0.2;
    tips.push(tip);
    totals.push(bill + tip);
  }
};

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);
console.log(bills, tips, totals);


// Coding Challenge #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName} BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName} BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`
  );
}

// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    tips.push(tip);
    totals.push(bill + tip);
  } else {
    let tip = bill * 0.2;
    tips.push(tip);
    totals.push(bill + tip);
  }
};

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}
console.log(bills, tips, totals);

*/
