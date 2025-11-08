// File: appUseExample.js
const express = require('express');
const app = express();

// Middleware example
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}, Time: ${new Date()}`);
  next(); // move to next middleware/route
});

app.get('/', (req, res) => {
  res.send('Hello from Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => {
  console.log('app.use() example running at http://localhost:3000');
});
