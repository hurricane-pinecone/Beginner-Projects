import readline from "node:readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Welcome to palindrome checker. Enter a word:\n",
});
