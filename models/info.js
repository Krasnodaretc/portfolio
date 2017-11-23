'use strict';
/**
 * Created by Krasnodaretc on 08.09.17.
 */
const co = require('co');


class Main {

  constructor(name, db) {
    console.log('Hello World!', name);
    this.db = db;
  }

  async getInfo(key) {
    return this[key] = await this.db.collection('info').findOne({key: key},{_id: 0, 'key':0});
  }

  async getPortfolio(key) {
    return this[key]
  }
}

module.exports.main = async function () {

  let data = new Main('Egor', db);
  let [bio,stack] = await Promise.all([data.getInfo('bio'), data.getInfo('stack')]);
  return Object.assign(bio,stack);
};

module.exports.portfolio = async function () {
  return true
};