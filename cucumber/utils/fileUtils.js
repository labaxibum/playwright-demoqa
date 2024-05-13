const fs = require("fs");

async function readFromJSONFile(filePath){
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}

module.exports = {
    readFromJSONFile
}