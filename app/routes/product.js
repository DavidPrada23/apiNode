const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const router = express.Router();

router.get('/',ProductCtrl.index) // api.com/product/
      .post('/',ProductCtrl.create)   // api.com/product/
      .get('/:key/:value',ProductCtrl.find,ProductCtrl.show)    // api.com/product/category/Niños
      .put('/:key/:value',ProductCtrl.find,ProductCtrl.update)  // api.com/Product/name/acetaminofen
      .delete('/:key/:value',ProductCtrl.find,ProductCtrl.remove);  // api.com/Product/name/acetaminofen

module.exports = router;