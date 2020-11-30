const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const priceAreaSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
    },
    minPrice: Number,
    priceArea: Number,
    prodId: {
        type: ObjectId,
        ref: "Product"
    }

});

module.exports = mongoose.model('PriceArea', priceAreaSchema);