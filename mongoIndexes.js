/**
 * Created by Krasnodaretc on 08.09.17.
 */
const co = require('co');

module.exports = function() {
  return co(function* () {
    yield [
      db.collection('info').createIndexes(
        [
          {
            key: {
              'key': 1
            }
          },
        ]
      ),
      db.collection('projects').createIndexes(
        [
          {
            key: {
              'name': 1
            }
          },
        ]
      )
    ];
  });
};