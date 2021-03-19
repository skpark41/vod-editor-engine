const express = require('express');
const router = new express.Router();
const agenda = 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('test');
});

module.exports = router;
