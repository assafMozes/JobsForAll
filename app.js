var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment')
var session = require ('express-session');




var index = require('./routes/index');
var users = require('./routes/users');
var positions = require('./routes/positions');
var myPositions = require('./routes/myPositions');
var skills = require('./routes/skills');
var cities = require('./routes/cities');
var employees = require('./routes/employees');

// var users = require('./routes/jobs');

var app = express();

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "student",
    database: "allJobs2"
})
con.connect(function (err) {
    if (err) throw err;
    console.log('connected')
})
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: ',assafmozes', cookie: { maxAge: 100000000 } }));

app.use('/users', users);
app.use('/positions', positions);
app.use('/myPositions', myPositions);
app.use('/skills', skills);
app.use('/cities', cities);
app.use('/employees', employees);
app.use('/', index);
// app.use('/jobs', jobs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
