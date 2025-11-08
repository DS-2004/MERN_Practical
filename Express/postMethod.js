// File: postMethod.js
const express = require('express');
const app = express();
app.use(express.json()); // for parsing JSON body

app.post('/register', (req, res) => {
  const user = req.body;
  res.send(`User ${user.name} registered successfully!`);
});

app.listen(3000, () => {
  console.log('POST method example running at http://localhost:3000');
});
