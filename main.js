#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 51214;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin",
    },
]);
if (pinAnswer.pin === myPin) {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select your operation",
            choices: ["withDraw", "balanceInquary", "fast cash"]
        },
    ]);
    if (operationAns.operation === "fast cash") {
        let answerAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "select your amount",
                choices: ["500", "1000", "2000", "5000", "3000", "10000"],
            },
        ]);
        myBalance -= answerAmount.amount;
        console.log(`your remaining balance is ${myBalance}`);
    }
    if (operationAns.operation === "withDraw") {
        let answerAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter the amount you want to withdraw",
            }
        ]);
        if (myBalance >= answerAmount.amount) {
            myBalance -= answerAmount.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAns.operation === "balanceInquary") {
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("invalid number");
}
