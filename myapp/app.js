var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');
var adminRouter = require('./routes/admin');
//var modelRouter = require('./routes/model');

var app = express();

mongoose.connect('mongodb+srv://Anonymous:genuine123@cluster0-zkmmw.mongodb.net/dukaan?retryWrites=true&w=majority', {useNewUrlParser: true});
//const bodyParser = require('body-parser');

// view engine setup
app.set('views', [path.join(__dirname, 'views'),
path.join(__dirname, 'views/admin/'), 
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// //mongoose.connect('mongodb+srv://Anonymous:genuine123@cluster0-zkmmw.mongodb.net/test?retryWrites=true&w=majority', {
// //mongoose.connect(adminRouter.url, {
//   useNewUrlParser: true
// }).then(() => {
//   console.log("Successfully connected to the database");    
// }).catch(err => {
//   console.log('Could not connect to the database. Exiting now...', err);
//   process.exit();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop' , shopRouter);
app.use('/admin', adminRouter);
//app.use('/model', modelRouter);

app.get('/',function(res,req){
  res.render('index');
});
app.get('/items.json',function(req,res){
  res.render()
});
// app.get('/shop', function(req,res){
//     res.render('shop');
//   });
app.get('/admin/user', function(req,res){
  res.render('user');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
