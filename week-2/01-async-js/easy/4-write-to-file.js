// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function write(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) console.log(err);
    console.log(`"${content}" written in ${filename}`);
  });
}

write("newfile.txt", "Hello to the new file");
