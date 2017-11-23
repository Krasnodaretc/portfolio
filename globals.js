/**
 * Created by Krasnodaretc on 07.09.17.
 */
global.rootDir = __dirname;

global.Deffer = function() {
  var self = this;

  self.promise = new Promise(function(resolve, reject) {
    self.resolve = resolve;
    self.reject = reject;
  });
};

global.db = null;
global.ObjectId = null;
global.logger = null;