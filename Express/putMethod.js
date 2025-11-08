
const express = require('express');
const app = express();
app.use(express.json());

app.put('/update', (req, res) => {
  const user = req.body;
  res.send(`User ${user.name}'s record updated successfully!`);
});

app.listen(3000, () => {
  console.log('PUT method example running at http://localhost:3000');
});
