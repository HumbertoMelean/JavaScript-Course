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

*/
