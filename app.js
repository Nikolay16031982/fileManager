process.stdin.setEncoding("utf8");
const os = require("os");
const path = require("path");
const { printPath } = require("./util/printPath");
const arg = process.argv[2].replace("--username=", "");
const { switchOperations } = require("./switch");
const { stdin } = require("process");
const userHomeDir = os.homedir();
const writeDefault = require("./util/writeDefault");
const readDefault = require("./util/readDefault");
writeDefault({ currentDir: __dirname });
const currentDir = readDefault("currentDir");
stdin.on("data", (chank) => {
  switchOperations(chank.replace("\n", "").split(" "));
});
process.on("SIGINT", () => {
  process.stdout.write("Thank you for using File Manager, Username, goodbye!");
  process.exit(0);
});
