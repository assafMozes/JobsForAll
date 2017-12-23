var express = require('express');
var router = express.Router();
var MyPositions = require('./../models/myPositions');

          
router.post('/add', function(req, res, next) {
  console.log(req.body)
  MyPositions.addPosition(req.body)

  res.send('added');
});

module.exports = router;
