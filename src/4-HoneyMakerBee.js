const Bee = require('./2-Bee');

class HoneyMakerBee extends Bee{
  constructor(age, color, food, job){
    super(age,color,food,job)
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney(){
    return this.honeypot = this.honeyPot++;
  }
  giveHoney(){
    return this.honeyPot = --this.honeyPot;
  }

}

module.exports = HoneyMakerBee;
