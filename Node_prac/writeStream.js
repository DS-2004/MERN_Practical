// File: writeStream.js
const fs = require('fs');

const writeStream = fs.createWriteStream('outputStream.txt');

writeStream.write('Hello Stream World!\n');
writeStream.write('This is written using writeStream in Node.js.');
writeStream.end();

writeStream.on('finish', () => {
  console.log("Writing completed!");
});

writeStream.on('error', (err) => {
  console.log("Error:", err);
});
