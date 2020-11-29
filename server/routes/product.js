const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth')
const {createOrUpdateProduct} = require('../controllers/product');

router.post('/create-or-update-product', authCheck, adminCheck, createOrUpdateProduct);
module.exports= router;