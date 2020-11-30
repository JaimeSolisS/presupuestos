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

exports.deleteContent = async (request,response) => {
    const {budgetId} = request.body;
    const content = await Content.deleteMany({budgetId: budgetId});
    if (content) {
        console.log('Content deleted', content);
        response.status(202).json(content);
    } else {
        return response.sendStatus(404);
    }
}