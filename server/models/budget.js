const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const budgetSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        index: true,
    },
    name: String,
    total: Number,
    date: {
        type: Date,
        default: Date.now
    },
    userMail: {
        type: ObjectId,
        ref: "User"

    }
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);