const Coffee = require("./coffee.js");


class Espresso extends Coffee {
    
        constructor() {
            super(60, 75, 100, "espresso");
    
        }
    
    }

module.exports = Espresso;
