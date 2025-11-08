// File: writeFile.js
const fs = require('fs');

const content = "This text is written using Node.js writeFile method!";

fs.writeFile('output.txt', content, (err) => {
  if (err) {
    console.log("Error writing file:", err);
    return;
  }
  console.log("File written successfully!");
});
