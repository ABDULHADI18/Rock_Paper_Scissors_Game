#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.white("\n \t<<==="), chalk.blue.bold("WELCOME TO ROCK PAPER SCISSORS GAME"), chalk.white("===>>\n"));
let game = await inquirer.prompt([
    {
        type: "list",
        name: "choice1",
        message: chalk.yellow.italic("\nPLAYER 1 Select a option from below :"),
        choices: ["ROCK", "PAPER", "SCISSORS"],
    },
    {
        type: "list",
        name: "choice2",
        message: chalk.yellow.italic("\nPLAYER 2 Select a option from below :"),
        choices: ["ROCK", "PAPER", "SCISSORS"],
    },
]);
let compare = function (choice1, choice2) {
    if (game.choice1 === game.choice2) {
        return chalk.cyan("\nMatch ends it's a draw");
    }
    else if (game.choice1 === "ROCK") {
        if (game.choice2 === "SCISSORS") {
            return chalk.cyan("\nRock wins");
        }
        else {
            return chalk.cyan("\nPaper wins");
        }
    }
    else if (game.choice1 === "PAPER") {
        if (game.choice2 === "ROCK") {
            return chalk.cyan("\nPaper wins");
        }
        else {
            return chalk.cyan("\nScissors wins");
        }
    }
    else if (game.choice1 === "SCISSORS") {
        if (game.choice2 === "PAPER") {
            return chalk.cyan("\nScissors wins");
        }
        else {
            return chalk.cyan("\nRock wins");
        }
    }
    else if (game.choice1 === "ROCK") {
        if (game.choice2 === "PAPER") {
            return chalk.cyan("\nPaper wins");
        }
        else {
            return chalk.cyan("\nScissors wins");
        }
    }
    else if (game.choice1 === "PAPER") {
        if (game.choice2 === "SCISSORS") {
            return chalk.cyan("\nScissors wins");
        }
        else {
            return chalk.cyan("\nRock wins");
        }
    }
    else if (game.choice1 === "SCISSORS") {
        if (game.choice2 === "ROCK") {
            return chalk.cyan("\nRock wins");
        }
        else {
            return chalk.cyan("\nPaper wins");
        }
    }
};
console.log(compare(game.choice1, game.choice2));
while ([]) {
    let playAgain = await inquirer.prompt([
        {
            type: "list",
            name: "Again",
            message: chalk.yellow.italic("\nDo you want to play again?"),
            choices: ["Yes", "No"],
        },
    ]);
    if (playAgain.Again === "Yes") {
        game = await inquirer.prompt([
            {
                type: "list",
                name: "choice1",
                message: chalk.yellow.italic("\nPLAYER 1 Select a option from below :"),
                choices: ["ROCK", "PAPER", "SCISSORS"],
            },
            {
                type: "list",
                name: "choice2",
                message: chalk.yellow.italic("\nPLAYER 2 Select a option from below :"),
                choices: ["ROCK", "PAPER", "SCISSORS"],
            },
        ]);
        console.log(compare(game.choice1, game.choice2));
    }
    else {
        console.log(chalk.magenta.bold("\nTHANKS FOR PLAYING :)"));
        break;
    }
}
