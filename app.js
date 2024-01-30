require("dotenv").config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/connection');

var indexRouter = require('./routes/index');
var tripRouter = require('./routes/trip');
<<<<<<< HEAD
=======
var cartRouter = require('./routes/cart');
var purchaseRouter = require('./routes/purchase');
>>>>>>> 39945797c201205e0b4df9131646a83c9809bff5

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trip', tripRouter);
<<<<<<< HEAD
=======
app.use('/cart', cartRouter);
app.use('/purchase', purchaseRouter)
>>>>>>> 39945797c201205e0b4df9131646a83c9809bff5

module.exports = app;
