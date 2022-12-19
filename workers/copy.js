const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const { workerData } = require("node:worker_threads");
const { relativePath } = require("../util/relativePath");
let { file_name, dir_name } = workerData;
const dir_path = relativePath(file_name, dir_name);
const filePath = path.resolve(dir_name, path.parse(file_name).base);
pipeline(
  fs.createReadStream(file_name),
  fs.createWriteStream(filePath),
  (err) => {
    err && console.error(err);
  }
);
