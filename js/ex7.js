let hours = parseInt(prompt("Enter hours:"));
let minutes = parseInt(prompt("Enter minutes:"));
let seconds = parseInt(prompt("Enter seconds:"));

if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }
  console.log("Time input: " + hours + "h" + minutes + "m" + seconds + "s");
  console.log("One second later: " + hours + "h" + minutes + "m" + seconds + "s");
} else {
  console.log("Invalid input");
}
