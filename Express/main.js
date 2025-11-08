
const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');

app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Express Router example running at http://localhost:3000');
});
