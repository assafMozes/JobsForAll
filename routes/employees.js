var express = require('express');
var router = express.Router();
var Employees = require('./../models/employees');



router.get('/', function(req, res, next) {
  res.send(Employees.sendEmployees());
});

router.post("/NewEmployee", function(req, res, next) {
  Employees.newEmployee(req.body.userId, function(x){
    res.send(x)
  })
})

module.exports = router;
