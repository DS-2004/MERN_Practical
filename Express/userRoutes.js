
const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.send('User Profile Page');
});

router.get('/settings', (req, res) => {
  res.send('User Settings Page');
});

module.exports = router;
