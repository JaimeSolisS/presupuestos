const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const priceXquantitySchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
    },
    price: Number,
    range: {
        type: Number,
        default: 1
    },
    prodId: {
        type: ObjectId,
        ref: "Product"
    }
});

module.exports = mongoose.model('PriceQuantity', priceXquantitySchema);