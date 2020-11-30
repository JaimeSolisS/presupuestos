const Budget = require('../models/budget')

exports.createBudget = async (request, response) => {
    const {name, userId} = request.body; 
    let budget = await Budget.create({name, userId});
    return response.status(200).json(budget);
};

exports.deleteBudget = async (request,response) => {
    const {id} = request.body;
    const budget = await Budget.findByIdAndRemove({_id: id});
    if (budget) {
        console.log('Budget deleted', budget);
        response.status(202).json(budget);
    } else {
        return response.sendStatus(404);
    }
}

exports.findAllBudgets = async (request, response) => {
    await Budget.find().exec((error,budget) => {
        if (error) throw new Error(error);
        response.json(budget); 
    })
};

exports.findBudgetById = async (request, response) => {
    await Budget.findOne({_id: request.params.id}).exec((error, budget) => {
        if (error) throw new Error(error);
        response.json(budget); 
    });
};

exports.findBudgetsByUserId = async (request, response) => {
    await Budget.find({userId: request.params.userId}).exec((error, budgets) => {
        if(error) throw new Error(error);
        response.json(budgets);
    })
}

exports.updateBudget = async (request, response) => {
    const {id, total} = request.body;
    const budget = await Budget.findOneAndUpdate({_id: id}, { $set: {total: total} },{new: true});
    if (budget) {
        console.log('Budget update', budget);
        response.status(202).json(budget);
    } else {
        return response.sendStatus(404);
    }
}