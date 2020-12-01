const express = require('express');
const router = express.Router();

//middleware
const {authCheck, adminCheck} = require('../middlewares/auth')
const {createProduct, updateProduct, findOneProduct, getAllProducts, findProductsByCategory} = require('../controllers/product');
router.post('/create-product', authCheck, adminCheck, createProduct);
router.post('/update-product', authCheck, adminCheck, updateProduct);
router.get('/find-product/:id', findOneProduct);
router.get('/find-products', getAllProducts);
router.get('/find-products-by-category/:category', findProductsByCategory);
module.exports= router;
