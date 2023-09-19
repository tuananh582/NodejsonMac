const express = require('express');
const path = require('path')
const rootDir = require('../util/path')
const Router = express.Router();
const products = [];

Router.get('/add-product', (req, res, next) => {
//   res.send(
//     '<form action="/admin/add-product" method="POST"> <input type="text" name ="title"> <button type="submit"> Add</button>  </form>'
//   );
    res.sendFile(path.join(rootDir,'views','add-product.html'))
});
Router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({title:req.body.title})
  res.redirect('/');
});
// module.exports = Router;
exports.routes=Router;
exports.products=products;
