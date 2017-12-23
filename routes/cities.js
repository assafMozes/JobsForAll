var express = require('express');
var router = express.Router();
var Cities = require('./../models/cities');



router.get('/', function(req, res, next) {
  res.send(Cities.sendCities());
});

// router.get('/filtered', function(req, res, next) {
//   var skill = req.query.skill;
//   var location = req.query.location;
//   var publiser = req.query.publiser;

//   res.send(users);
// });

module.exports = router;
