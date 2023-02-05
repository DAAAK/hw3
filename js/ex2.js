let name = prompt("Enter your name:");
let units = prompt("Enter the number of units completed:");

if (isNaN(units) || !Number.isInteger(Number(units)) || units < 0) {
  console.log("Sorry, " + units + " is not a valid entry.");
} else {
  let gradeStanding;
  if (units <= 30) {
    gradeStanding = "Freshman";
  } else if (units <= 60) {
    gradeStanding = "Sophomore";
  } else if (units <= 90) {
    gradeStanding = "Junior";
  } else {
    gradeStanding = "Senior";
  }
  console.log("Hello " + name + "\nYour grade standing is " + gradeStanding);
}