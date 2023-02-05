let number = parseInt(prompt("Enter a number:"));

for (var i = 0; i <= 10; i++) {
  if (isNaN(number) || !Number.isInteger(Number(number))) {
    console.log("Sorry, this is not a valid entry.");
    break
  }
  console.log(number + " x " + i + " = " + number * i);
}