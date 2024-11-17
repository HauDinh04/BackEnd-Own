const express = require("express");
const router = express.Router();
const productController=require('../controllers/productController');
router.get('/products',productController.productPage)
router.get('/api/products',productController.getAllProducts)
module.exports = router;
