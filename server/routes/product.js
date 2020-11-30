const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth')
const {createProduct, updateProduct, findOneProduct, getAllProducts, findProductsByCategory} = require('../controllers/product');
//, authCheck, adminCheck
router.post('/create-product', createProduct);//Poner la linea de arriba
router.post('/update-product', updateProduct);
router.get('/find-product/:id', findOneProduct);
router.get('/find-products', getAllProducts);
router.get('/find-products-by-category/:category', findProductsByCategory);
module.exports= router;