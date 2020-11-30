const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth')
const {createBudget, updateBudget} = require('../controllers/budget');

router.post('/create-budget', createBudget);
router.post('/update-budget', updateBudget);
module.exports= router;