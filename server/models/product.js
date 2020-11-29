const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        index: true,
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
        default: true
    }
});

module.exports = mongoose.model('Product', productSchema);