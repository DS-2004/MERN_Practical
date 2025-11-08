
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log("1 req.method:", req.method);
  console.log("2 req.url:", req.url);
  console.log("3 req.headers:", req.headers);
  console.log("4 req.query:", req.query);
  console.log("5 req.ip:", req.ip);
  res.send("Check console for Request object details!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
