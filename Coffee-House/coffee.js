
const CoffeeMachine = require("./coffee-machine.js");

class Coffee extends CoffeeMachine {
  constructor(milk, cream, latte, name) {
    super(milk, cream, latte);
    this.name = name;
  }
}


module.exports.Coffee = Coffee;
