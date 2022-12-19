const { readFile, writeFile } = require("fs/promises");
const path = require("path");
module.exports = (data) => {
  const filePath = path.resolve(__dirname, "../default.json");
  const promise = readFile(filePath, "utf8");
  promise.then((chank) => {
    const readData = JSON.parse(chank);
    const writeData = { ...readData, ...data };
    writeFile(filePath, JSON.stringify(writeData), "utf8");
  });
};
