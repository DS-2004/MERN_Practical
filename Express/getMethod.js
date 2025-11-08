
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is a GET request');
});

app.get('/user', (req, res) => {
  res.json({ name: 'Diksha', age: 21 });
});

app.listen(3000, () => {
  console.log('GET method example running at http://localhost:3000');
});
