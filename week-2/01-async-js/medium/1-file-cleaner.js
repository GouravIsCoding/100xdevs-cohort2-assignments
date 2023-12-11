// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs/promises");
function manipulate(data) {
  newData = "";
  prev = "";
  for (let i = 0; i < data.length; i++) {
    if (prev == " " && data[i] == " ") {
      prev = data[i];
      continue;
    }
    newData += data[i];
    prev = data[i];
  }
  return newData;
}
async function readAndWrite(filename) {
  try {
    let data = await fs.readFile(filename, "utf-8");
    data = manipulate(data.trim());
    await fs.writeFile(filename, data);
  } catch (err) {
    console.error(err);
  }
}

readAndWrite("file.txt");
