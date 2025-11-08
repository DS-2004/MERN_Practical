// File: responseFunctions.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // 1️⃣ send() - send response text
  res.send("Hello from Express!");

  // 2️⃣ status() - set status code
  res.status(200);

  // 3️⃣ json() - send JSON data
  // res.json({ message: "This is JSON response" });

  // 4️⃣ set() - set response header
  // res.set('Content-Type', 'text/plain');

  // 5️⃣ end() - end the response
  // res.end();
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
