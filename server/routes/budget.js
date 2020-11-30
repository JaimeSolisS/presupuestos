const express = require('express');

const router = express.Router();
const {authCheck, adminCheck} = require('../middlewares/auth')
const {createBudget, updateBudget, findBudgetById, findBudgetsByUserId, deleteBudget, findAllBudgets} = require('../controllers/budget');

router.post('/create-budget', createBudget);
router.post('/update-budget', updateBudget);
router.delete('/delete-budget', deleteBudget);
router.get('/find-budget-by-id/:id', findBudgetById);
router.get('/find-budgets',findAllBudgets);
router.get('/find-budgets-by-userid/:userId', findBudgetsByUserId);
module.exports= router;