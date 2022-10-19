// class coffe machine
const Cappuccino = require("./cappuccino.js");
const Latte = require("./latte.js");
const Espresso = require("./espresso.js");


class CoffeeMachine {
   
    constructor(milk, cream, latte, ) {
        this.milk = milk;
        this.cream = cream;
        this.latte = latte;
        
    }
    
    getMilk() {
        return this.milk;
    }

    getCream() {
        return this.cream;
    }

    getLatte() {
        return this.latte;
    }

    


    



    setMilk(milk) {
        this.milk = milk;
    }

    setCream(cream) {
        this.cream = cream;
    }

    setLatte(latte) {
        this.latte = latte;
    }

    showSupply() {
        console.log(`Milk: ${this.milk} Cream: ${this.cream} Latte: ${this.latte} `);
    }

    buy(){
        console.log("What would you like to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
        let choice = prompt("Your choice: ");
        if (choice === "1") {
            let espresso = new Espresso();
            if (this.milk >= espresso.getMilk() && this.cream >= espresso.getCream() && this.latte >= espresso.getLatte()) {
                this.milk -= espresso.getMilk();
                this.cream -= espresso.getCream();
                this.latte -= espresso.getLatte();
                
                console.log("Here is your espresso. Enjoy!");
            } else {
                console.log("Sorry, not enough supplies.");
            }
        }
        if (choice === "2") {
            let latte = new Latte();
            if (this.milk >= latte.getMilk() && this.cream >= latte.getCream() && this.latte >= latte.getLatte()) {
                this.milk -= latte.getMilk();
                this.cream -= latte.getCream();
                this.latte -= latte.getLatte();
                
                console.log("Here is your latte. Enjoy!");
            } else {
                console.log("Sorry, not enough supplies.");
            }
        }
        if (choice === "3") {
            let cappuccino = new Cappuccino();
            if (this.milk >= cappuccino.getMilk() && this.cream >= cappuccino.getCream() && this.latte >= cappuccino.getLatte()) {
                this.milk -= cappuccino.getMilk();
                this.cream -= cappuccino.getCream();
                this.latte -= cappuccino.getLatte();
                
                console.log("Here is your cappuccino. Enjoy!");
            } else {
                console.log("Sorry, not enough supplies.");
            }
        }

    }

    fill() {
        console.log("Write how many ml of milk do you want to add:");
        this.setMilk(this.getMilk() + parseInt(prompt("Your choice: ")));
        console.log("Write how many ml of cream do you want to add:");
        this.setCream(this.getCream() + parseInt(prompt("Your choice: ")));
        console.log("Write how many ml of latte do you want to add:");
        this.setLatte(this.getLatte() + parseInt(prompt("Your choice: ")));


    }

    take() {
        console.log("I gave you" + this.getMoney());
        this.setMoney(0);
    }

}


module.exports.CoffeeMachine = CoffeeMachine;

