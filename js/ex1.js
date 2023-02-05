let input = prompt("Enter a number between 1 and 100:");

if (isNaN(input) || !Number.isInteger(Number(input)) || input < 1 || input > 100) {
  console.log("Sorry, " + input + " is not a valid entry.");
} else {
  console.log("Thank you! You entered " + input + ", a valid number.");
}