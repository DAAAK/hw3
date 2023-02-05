let input = prompt("Enter a day of the week (sun, mon, tue, wed, thu, fri, sat):").toLowerCase();

switch (input) {
  case "sun":
    console.log("You entered: " + input + "\nThe following day is: " + "mon");
    break;
  case "mon":
    console.log("You entered: " + input + "\nThe following day is: " + "tue");
    break;
  case "tue":
    console.log("You entered: " + input + "\nThe following day is: " + "wed");
    break;
  case "wed":
    console.log("You entered: " + input + "\nThe following day is: " + "thu");
    break;
  case "thu":
    console.log("You entered: " + input + "\nThe following day is: " + "fri");
    break;
  case "fri":
    console.log("You entered: " + input + "\nThe following day is: " + "sat");
    break;
  case "sat":
    console.log("You entered: " + input + "\nThe following day is: " + "sun");
    break;
  default:
    console.log("Sorry, " + input + " is not a valid entry.");
}
