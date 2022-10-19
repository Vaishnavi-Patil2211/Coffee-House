
const Coffee = require("./coffee.js");

class Cappuccino extends Coffee {

    constructor() {
        super(80, 90, 125, "cappuccino");

    }

}

module.exports.Cappuccino = Cappuccino;
