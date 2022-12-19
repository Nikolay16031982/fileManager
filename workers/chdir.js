const path = require("path");
const fs = require("fs");
const { workerData } = require("node:worker_threads");
const writeDefault = require("../util/writeDefault");
const readDefault = require("../util/readDefault");
const { path_to_directory } = workerData;
const currentDir = readDefault("currentDir");

const newDirPath = path.join(currentDir, path_to_directory);

fs.access(newDirPath, fs.constants.F_OK, (err) => {
  if (err) console.log("Directory not exist");
  else {
    writeDefault({ currentDir: newDirPath });
  }
});
