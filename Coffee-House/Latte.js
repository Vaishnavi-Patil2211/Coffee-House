const Coffee = require("./coffee.js");

class Latte extends Coffee {
    constructor() {
        super(100, 125, 150, "latte");
    }
}

module.exports = Latte;