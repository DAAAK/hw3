let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (isNaN(num1) || !Number.isInteger(num1) || isNaN(num2) || !Number.isInteger(num2)) {
  console.log("Invalid input. Please enter two integers.");
} else {
  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;
  let quotient = num1 / num2;
  let remainder = num1 % num2;
  console.log(`Addition: ${num1} + ${num2} = ${sum}\n` +
        `Subtraction: ${num1} - ${num2} = ${difference}\n` +
        `Multiplication: ${num1} * ${num2} = ${product}\n` +
        `Division: ${num1} / ${num2} = ${quotient}\n` +
        `Modulo: ${num1} % ${num2} = ${remainder}`);
}