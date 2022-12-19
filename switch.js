const { Worker, parentPort, workerData } = require("node:worker_threads");
module.exports.switchOperations = (args) => {
  switch (args[0]) {
    case "cp":
      const worker = new Worker("./workers/copy.js", {
        workerData: { file_name: args[1], dir_name: args[2].replace("\n", "") },
      });
      break;
    case "cd":
      const cd_worker = new Worker("./workers/chdir.js", {
        workerData: { path_to_directory: args[1].replace("\n", "") },
      });
      break;
    case "ls":
      const ls_worker = new Worker("./workers/lsdir.js");
      break;
    default:
      break;
  }
};
