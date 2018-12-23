var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mustacheExpress = require('mustache-express')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5wmajh23hCvpX3U-ypE9Gozy4sOjvgA8",
    authDomain: "homebase-51972.firebaseapp.com",
    databaseURL: "https://homebase-51972.firebaseio.com",
    projectId: "homebase-51972",
    storageBucket: "homebase-51972.appspot.com",
    messagingSenderId: "233750046468"
  };
  firebase.initializeApp(config);