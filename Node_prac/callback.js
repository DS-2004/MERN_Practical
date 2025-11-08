// File: callback.js

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function showMessage() {
  console.log("Welcome to Node.js Callback Function Example!");
}

greet("Diksha", showMessage);
