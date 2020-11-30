const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth')
const { createContent, findContentByBudgetId, deleteContent } = require('../controllers/budgetContent');

router.post('/create-content',createContent);
router.get('/find-content-by-budgetid/:budgetId', findContentByBudgetId);
router.delete('/delete-content',deleteContent);
module.exports= router;