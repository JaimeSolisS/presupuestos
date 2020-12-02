const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");
// controllers
const { userCart, getUserCart, budgets } = require("../controllers/user");

router.post("/user/cart", authCheck, userCart); // 
//router.get("/user/cart", authCheck, getUserCart); // save cart
router.get("/user/budgets", authCheck, budgets); // save cart

// router.get("/user", (req, res) => {
//   res.json({
//     data: "hey you hit user API endpoint",
//   });
// });

module.exports = router;