/**
 * Created by Krasnodaretc on 07.09.17.
 */
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const engine = require('ejs-locals');
const express = require('express');
const compress = require('compression');
const co = require('co');
const intel = require('intel');

const mongoIndexes = require('./mongoIndexes');
const routes = require('./routes');

function init(settings) {
  co(function* () {
    var app = express();

    logger = intel;
    logger.basicConfig({
      'format': {
        'format': '[%(date)s] %(name)s.%(levelname)s: %(message)s',
        'strip': true
      },
      'level': settings.logLevel
    });


    app.engine('ejs', engine);
    app.set('views', rootDir + '/views');
    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(compress());


    ObjectId = mongodb.ObjectID;
    db = yield mongodb.connect(settings.mongoUrl);
    yield mongoIndexes();

    app.listen(settings.port);
    logger.info('Server started on %s port', settings.port);
    routes(app);
  })
    .catch(function(err) {
      logger.error(err);
    });
}

module.exports = init;