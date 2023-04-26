'use strict';

const speedProperty = function (speed, model) {
  this.speed = speed;
  this.model = model;
};

const car1 = new speedProperty(120, 'bmw');
const car2 = new speedProperty(95, 'mercedes');

speedProperty.prototype.accelerate = function () {
  this.speed += 10;
};

speedProperty.prototype.brake = function () {
  this.speed -= 5;
};

car1.accelerate();
// console.log(car1);
car1.accelerate();
// console.log(car1);
car1.brake();
// console.log(car1);

class speedProperty2 {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }
  accelerate(speed) {
    console.log((speed += 10));
  }
  brake(speed) {
    console.log((speed -= 5));
  }
  speedUS(speed) {
    console.log(speed * 1.6);
  }
}

// /////////////////////CODE CHALLENGE 3

const Electric = function (speed, make, charge) {
  speedProperty2.call(this, speed, make);
  this.charge = charge;
};

const tesla = new Electric('Tesla', 120, 23);
Electric.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
