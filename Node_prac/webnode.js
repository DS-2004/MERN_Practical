// File: hello.js
const http = require('http');

// Create a server that sends "Hello World" to browser
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World from Node.js!');
}).listen(3000);

console.log('Server running at http://localhost:3000/');
