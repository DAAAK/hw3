let password, attempts = 0;

while (password !== "secret" && attempts < 3) {
  password = prompt("Enter password:");
  attempts++;
}

if (password === "secret") {
  console.log("You entered the correct password after " + attempts + " attempt(s)");
} else {
  console.log("Your account is locked! You failed to enter the correct password " + attempts + " times");
}