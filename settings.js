/**
 * Created by Krasnodaretc on 07.09.17.
 */
exports.dev = {
  port: 2305,
  logLevel: 'DEBUG',
  mongoUrl: 'mongodb://localhost:27017/my'
};

exports.production = {
  port: 2305,
  logLevel: 'ERROR',
  mongoUrl: 'mongodb://localhost:27017/my'
};

//mongodb://admin:jcvnauisd@95.213.204.166:27017/terra
