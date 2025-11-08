// File: fsFunctions.js
const fs = require('fs');

// 1️⃣ writeFile - create a new file
fs.writeFileSync('demo.txt', 'This is a demo file');

// 2️⃣ readFile - read the file content
const data = fs.readFileSync('demo.txt', 'utf8');
console.log("File Content:", data);

// 3️⃣ appendFile - add more text to file
fs.appendFileSync('demo.txt', '\nAppended new line');
console.log("New text added!");

// 4️⃣ rename - change file name
fs.renameSync('demo.txt', 'newDemo.txt');
console.log("File renamed!");

// 5️⃣ unlink - delete file
fs.unlinkSync('newDemo.txt');
console.log("File deleted!");
