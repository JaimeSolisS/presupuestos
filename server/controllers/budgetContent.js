const Content = require('../models/budgetContent')

exports.createContent = async (request, response) => {
    const {quantity, subtotal, prodId, budgetId} = request.body; 
    let content = await Content.create({quantity, subtotal, prodId, budgetId});
    return response.status(200).json(content);
};

exports.findContentByBudgetId = async (request, response) => {
    await Content.find({budgetId: request.params.budgetId}).exec((error, content) => {
        if(error) throw new Error(error);
        response.json(content);
    })
}