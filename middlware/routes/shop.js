const express = require('express');
const path = require('path');
const rootDir = require('../util/path')
const adminData = require('./admin')
const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html')); //sibling ../ go up one level
  res.render('shop') //this is engine
});

module.exports = router;
