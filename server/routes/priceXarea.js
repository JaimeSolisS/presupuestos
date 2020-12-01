const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth');
const {createPricePerArea, getPriceAreaByProductId} = require('../controllers/priceXarea');

router.post('/create-price-per-area', authCheck, adminCheck, createPricePerArea);
router.get('/get-price-area-by-productid/:prodId',getPriceAreaByProductId);
module.exports= router;