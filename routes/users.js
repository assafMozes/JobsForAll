var express = require('express');
var router = express.Router();

var Users = require('./../models/users');

router.get('/checkUser/:email/:password', function (req, res, next) {
  // console.log(req.session.id)
  var email = req.params.email;
  var password = req.params.password;
  var abc;
  Users.checkUserLogin(email, password, req.session, function (user) {
    res.send(user);
    // console.log(abc)
  })
});

router.post('/register', function (req, res, next) {
  console.log(req.body)
  Users.addUser(req.body)
  res.send('updated');
})

router.put('/logOut', function (req, res, next) {
  req.session.loggedIn = false;
  res.send('loggedOut');
  
})

router.get('/isLoggedIn', function (req, res, next) {
  if (req.session.loggedIn) {
    res.send(req.session.loggedIn);
  }
  else {
    res.send([])
  }
})

module.exports = router;