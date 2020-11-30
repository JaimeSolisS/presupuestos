const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth')
const { createContent, findContentByBudgetId } = require('../controllers/budgetContent');

router.post('/create-content',createContent);
router.get('/find-content-by-budgetid/:budgetId', findContentByBudgetId);
module.exports= router;