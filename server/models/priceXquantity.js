const {ObjectId} = mongoose.Schema
const mongoose = require('mongoose')

const priceXquantitySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
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