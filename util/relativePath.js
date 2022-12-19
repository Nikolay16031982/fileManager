const path = require("path")
module.exports.relativePath=(from,to)=>{
    const outPath = path.relative(from, to)
    if (path.isAbsolute(outPath)) outPath = path.normalize(outPath);
    return outPath
}