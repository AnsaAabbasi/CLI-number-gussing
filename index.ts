#!/usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 +1 );

console.log("Welcome to number guessing game");
const answer = await inquirer.prompt([
{
name: "userGuesseNumber",
type: "number",
message: "Please guess a number 1-10."},
])
if(answer.userGuesseNumber === randomNumber){
 console.log("congratulaions you guess right number.")
}else{
    console.log("you guess wrong number");
}