const express = require('express');
const router = express.Router();

router.get('/contacts', (req, res, next) => {
  res.send('This is the contacts route');
  console.log('Navigated to contacts route');
});

module.exports = router;