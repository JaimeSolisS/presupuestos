const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true
    },
    name: String,
    description: String,
    image: {
        type: String,
        default: null
    },
    category: {
        type: String,
        default: "otros"
    },
    hidden: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Product', productSchema);