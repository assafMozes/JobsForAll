var express = require('express');
var router = express.Router();
var Skills = require('./../models/skills');



router.get('/', function(req, res, next) {
  res.send(Skills.sendSkills());
});

// router.get('/filtered', function(req, res, next) {
//   var skill = req.query.skill;
//   var location = req.query.location;
//   var publiser = req.query.publiser;

//   res.send(users);
// });

module.exports = router;
