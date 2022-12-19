const { readFileSync } = require("fs");
const { readFile } = require("fs/promises");
const path = require("path");
module.exports = (data) => {
  const filePath = path.resolve(__dirname, "../default.json");
  const chank = readFileSync(filePath, "utf8");
  return JSON.parse(chank)["currentDir"];
};
