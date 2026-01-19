const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Welcome to palindrome checker. Enter a word:\n",
});

// This prints the initial prompt as configured above.
rl.prompt();

// The 'processInput' function fires every time the user enters some input
rl.addListener("line", processInput);

/*
 * 1. Compare input to the result of `getReversedString`.
 * 2. Using an if else statement, Log whether the word is or isn't a palindrome (The same word backwards and forwards, IE, racecar).
 */
function processInput(input) {}

/*
 * Should return the original string but reversed.
 *
 * HINT:
 * 1. A string is just an array of characters. IE: "word" => ['w', 'o', 'r', 'd'].
 * 2. Iterate over the input string `original` backwards and push into a seperate array.
 * 3. Think about capitilization. IE, should Racecar = racecar for the purpose of this tool?
 */
function getReversedString(original) {
  let reversed = [];

  // Write your loop here

  // join("") converts an array to a string, IE, it JOINS each element to a string seperated by the specified character.
  // "" in this case as we dont want spaces in our word.
  return reversed.join("");
}
