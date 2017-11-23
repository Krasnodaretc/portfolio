/**
 * Created by Krasnodaretc on 07.09.17.
 */
const cluster = require('cluster');
const os = require('os');
const env = process.env.NODE_ENV || 'production';
const settings = require('./settings')[env];

if (env === 'dev' || !cluster.isMaster) {
  Start();
} else if (env === 'production') {

  var numCPUs = os.cpus().length;

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('listening', function(worker, address) {
    console.log('worker %d is listening %d port', worker.process.pid, address.port);
  });

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker %d died (%s). restarting...',
      worker.process.pid, signal || code);

    cluster.fork();
  });
}

function Start() {
  require('./globals');
  require('./init-server')(settings);
}