
const { readdir, stat } = require("fs");
const readDefault = require("../util/readDefault")
const currentDir = readDefault("currentDir");
readdir(currentDir, function (err, items) {
  for (let i = 0; i < items.length; i++) {
    let file = currentDir + "/" + items[i];
    console.log("Start: " + file);

    stat(file, function (err, stats) {
      console.log(file);
      console.log(stats["size"]);
    });
  }
});
