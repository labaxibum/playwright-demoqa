const fs = require("fs");

export function readFromJSONFile(filePath) {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}
