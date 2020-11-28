const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const contentSchema = new mongoose.Schema({
    quantity: Number,
    subtotal: Number,
    prodId: {
        type: ObjectId,
        ref: "Product"
    },
    budgetId: {
        type: ObjectId,
        ref: "Budget"
    }
});

module.exports = mongoose.model('BudgetContent', contentSchema);