import inquirer from "inquirer";

console.log("Welcome to the Number guessing game!");

const answer = await inquirer.prompt([
  {
    type: "number",
    name: "min",
    message: "Enter the minimum limit you want to play",
  },
  {
    type: "number",
    name: "max",
    message: "Enter the maximum limit you want to play",
  },
]);

if (answer.min === answer.max) {
  console.log("You have entered the same number for min and max");
  process.exit(1); // or some other error handling
}

let min = answer.min;
let max = answer.max;

const actualNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(actualNumber);
let count = 0;

while (true) {
  const guess = await inquirer.prompt([
    {
      type: "number",
      name: "guess",
      message: "Guess a number between " + min + " and " + max,
    },
  ]);

  count++;

  if (guess.guess === actualNumber) {
    console.log("Congrats! You have guessed the number!");
    break;
  } else if (guess.guess < actualNumber) {
    console.log("Your guess is too low");
  } else {
    console.log("Your guess is too high");
  }
}

console.log("Congrats! it took you " + count + " times to win!");