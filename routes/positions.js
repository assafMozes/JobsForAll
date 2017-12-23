var express = require('express');
var router = express.Router();
var Positions = require('./../models/positions');



router.get('/', function(req, res, next) {
  res.send(Positions.sendPositions());
});

// router.get('/filtered', function(req, res, next) {
//   var skill = req.query.skill;
//   var location = req.query.location;
//   var publiser = req.query.publiser;

//   res.send(users);
// });

module.exports = router;
