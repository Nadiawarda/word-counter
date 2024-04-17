#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

const answer: {
sentence: string;
} = await inquirer.prompt([
    {
    name : "sentence",
 	type : "input",
 	message : "Enter your sentence to count the word: ",
 }
]);
const words = answer.sentence.trim().split(" ");

console.log(chalk.blueBright.italic.bold("Your sentence is here: ", words));
console.log(words);
console.log(chalk.cyanBright.italic.bold(`Total sentence words counting is:  ${words.length}`));


