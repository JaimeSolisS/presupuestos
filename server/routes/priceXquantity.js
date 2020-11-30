const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth');
const {createPricePerQuantity, getPriceQuantityByProductId} = require('../controllers/priceXquantity');

router.post('/create-price-per-quantity', createPricePerQuantity);
router.get('/get-price-quantity-by-productid/:prodId',getPriceQuantityByProductId);
module.exports= router;