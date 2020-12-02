const Cart = require("../models/cart");
const User = require("../models/user");

exports.budgets = async(req, res) => {
    let allBudgets = await Cart
        .find({})
        .sort("-createdAt")
        .populate("products.product")
        .exec();

    res.json(allBudgets);
};