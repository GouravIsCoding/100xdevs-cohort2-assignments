// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

hourLimit = 12; // 12 or 24 hour clock

date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
function time() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  if (hours === 24) {
    hours = 0;
  }
  console.clear();
  if (hourLimit === 24) console.log(`${hours}:${minutes}:${seconds}`);
  else {
    let strhours = String(hours % 12).padStart(2, "0");
    let strminutes = String(minutes).padStart(2, "0");
    let strseconds = String(seconds).padStart(2, "0");
    console.log(
      `${strhours}:${strminutes}:${strseconds}${hours > 12 ? "pm" : "am"}`
    );
  }
}

function showClock() {
  setInterval(() => {
    time();
  }, 1000);
}

showClock();
