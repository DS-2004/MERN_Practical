
const fs = require('fs');

fs.readdir('.', (err, files) => { // '.' means current folder
  if (err) {
    console.log("Error reading directory:", err);
    return;
  }
  console.log("Files in current directory:");
  files.forEach(file => console.log(file));
});
