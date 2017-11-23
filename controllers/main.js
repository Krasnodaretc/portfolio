'use strict';
/**
 * Created by Krasnodaretc on 08.09.17.
 */
const mainModel = require('../models/info').main;

module.exports = async function (req, res) {
  req.data = await mainModel();
  res.render('index.jade', req.data );
};