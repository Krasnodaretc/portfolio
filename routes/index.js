var controllers = require('../controllers');
var express = require('express');
// var router = express.Router();

/* GET home page. */
module.exports = function (app) {
  app.get('/', controllers.main);
  // app.get('/portfolio', controllers.portfolio);
};