// File: server.js
const net = require('net');

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.write("Welcome to the TCP Server!");

  socket.on('data', (data) => {
    console.log("Received from client:", data.toString());
  });

  socket.on('end', () => {
    console.log("Client disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
