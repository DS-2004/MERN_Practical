// File: readFile.js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  console.log("File contents:\n", data);
});
