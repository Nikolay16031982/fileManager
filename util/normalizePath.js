const path = require("path");
export const normalizePath = (inputPath) => {
  let newPath = inputPath;
  if (path.isAbsolute(inputPath)) newPath = path.normalize(file_name);
  return newPath;
};
