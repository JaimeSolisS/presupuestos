const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");

exports.userCart = async(req, res) => {
    // console.log(req.body); // {cart: []}
    const { cart } = req.body;

    let products = [];

    const user = await User.findOne({ email: req.user.email }).exec();

    // check if cart with logged user already exist
    let cartExistByThisUser = await Cart.findOne({ orderedBy: user._id }).exec();

    //Borra carrito -> en la version 2.0
    /*
    if (cartExistByThisUser) {
      cartExistByThisUser.remove();
      console.log("removed old cart");
    }
    */

    for (let i = 0; i < cart.length; i++) {
        let object = {};

        object.product = cart[i]._id;
        object.count = cart[i].cantidad;
        object.price = cart[i].total;
        // get price for creating total
        //let { price } = await Product.findById(cart[i]._id).select("total").exec();
        //object.price = price;

        products.push(object);
    }

    // console.log('products', products)

    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
        cartTotal = cartTotal + products[i].price;
    }

    // console.log("cartTotal", cartTotal);

    let newCart = await new Cart({
        products,
        cartTotal,
        orderedBy: user._id,
    }).save();

    console.log("new cart", newCart);
    res.json({ ok: true });
};

exports.budgets = async(req, res) => {
    let user = await User.findOne({ email: req.user.email }).exec();

    let userBudgets = await Cart.find({ orderedBy: user._id })
        .populate("products.product")
        .exec();

    res.json(userBudgets);
};