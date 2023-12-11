// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function read(filename) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(`${data} from ${filename}`);
  });
}

function expensiveCount(count) {
  count **= 9;
  console.log("expensive operation started");
  for (let i = 0; i < count; i++) {}
  console.log("expensive operation complete");
}

read("text.txt");
expensiveCount(10);
