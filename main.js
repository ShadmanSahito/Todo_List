#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgGray.bold.italic(` // Welcome to Shadman Sahito - Todo List \\  `));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.bgGreen.bold("Enter your Task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added into Todo List Successfully!`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addMore;
}
console.log(chalk.magentaBright("Your updated Todo-List:", todoList));
