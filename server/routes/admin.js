const express = require("express");
const { auth } = require("../firebase");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

const { budgets } = require("../controllers/admin");

// routes
router.get("/admin/budgets", authCheck, adminCheck, budgets);


module.exports = router;