const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth')
const {createProduct, findOneProduct, getAllProducts, findProductsByCategory} = require('../controllers/product');
//, authCheck, adminCheck
router.post('/create-product', createProduct);
router.get('/find-product/:id', findOneProduct);
router.get('/find-products', getAllProducts);
router.get('/find-products-by-category/:category', findProductsByCategory);
module.exports= router;