const fs = require("fs");

export async function readFromJSONFile(filePath){
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}
