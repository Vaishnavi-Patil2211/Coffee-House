
const CoffeeMachine = require("./coffee-machine.js");

let defaultCoffeeMachine = new CoffeeMachine(100, 100,100);

let exit = false;

while (!exit) {
  console.log("write action (buy, fill, take, remaining, exit):");
    let action = prompt("Your choice: ");
    if (action === "buy") {
        defaultCoffeeMachine.buy();
    }
    else if (action === "fill") {
        defaultCoffeeMachine.fill();
    }
    else if (action === "take") {
        defaultCoffeeMachine.take();
    }
    else if (action === "remaining") {
        defaultCoffeeMachine.showSupply();
    }
    else if (action === "exit") {
        exit = true;
    }
}


