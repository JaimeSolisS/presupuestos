const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const budgetSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
    },
    name: String,
    total: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Budget', budgetSchema);