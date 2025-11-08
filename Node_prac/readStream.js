// File: readStream.js
const fs = require('fs');

const readStream = fs.createReadStream('input.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log("Received chunk:\n", chunk);
});

readStream.on('end', () => {
  console.log("File reading completed!");
});

readStream.on('error', (err) => {
  console.log("Error:", err);
});
