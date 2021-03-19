const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const moment = require('moment');
const config = require(`./config/common`);
const package = require('./../package.json');
const indexRouter = require('./routes/index');

const app = express();
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
console.log('--------------------------------------------------------------');
console.log('- ' + package.name + ' - 로딩환경 : ' + config.env);
console.log('- ' + package.name + ' - Version : ' + package.version);
console.log('- ' + package.name + ' - 사용포트 : ' + config.port);
console.log('- ' + package.name + ' - 로딩시각 : ' + moment().format('YYYY-MM-DD HH:mm:ss'));
console.log('--------------------------------------------------------------');
module.exports = app;
