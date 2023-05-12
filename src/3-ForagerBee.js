const Bee = require('./2-Bee');

class ForagerBee extends Bee{
  constructor(age,color,food,job){
    super(age,color,'jelly',job)
    this.age = 10;
    this.job = 'find pollen'
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(){
    
    return this.treasureChest = ['pollen','flowers','gold']
  }
  // TODO..
}

module.exports = ForagerBee;
