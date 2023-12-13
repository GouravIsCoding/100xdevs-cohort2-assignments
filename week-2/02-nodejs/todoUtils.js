const fs = require("fs/promises");
const path = require("path");
const filename = "todos.json";
const filepath = path.join(__dirname, filename);

const asyncHandler = function (fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

const jsonReadFile = async () => {
  data = await fs.readFile(filepath, "utf-8");
  return JSON.parse(data);
};

const jsonWriteFile = async (data) => {
  data = JSON.stringify(data);
  await fs.writeFile(filepath, data);
};

module.exports = { asyncHandler, jsonReadFile, jsonWriteFile };
