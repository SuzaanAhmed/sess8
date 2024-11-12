const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
const readline=require('node:readline');

const rl=readline.createInterface({
    input:stdin,
    output:stdout,
});

r1.question("Enter 'GO' to get started with FoodBot: ", (userPrompt)=>{
    if(userPrompt=="GO")
        eventEmitter.emit("GO");
});

eventEmitter.on("GO",()=>{
    console.log("Hello there, this is FoodBot. The following are your options: ");
    console.log("1: View menu");
    console.log("2: Place Order for food");
    console.log("3: Place Order for beverage");
    console.log("4: Exit");

    r1.question("Select an option: ",(selection)=>{
        if(selection=="1")
            eventEmitter.emit("viewMenu");

        if(selection=="2")
            eventEmitter.emit("FoodOrder")

        if(selection=="3")
            eventEmitter.emit("BeverageOrder")

        if(selection=="4")
            eventEmitter.emit("Exit")
    });
});