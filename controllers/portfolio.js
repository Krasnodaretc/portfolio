'use strict';
/**
 * Created by Krasnodaretc on 11.09.17.
 */
const modelPortfolio = require('../models/info').portfolio;

module.exports = async function (req, res) {
  req.data.data = await modelPortfolio();
  res.render('index.jade', req.data)
};