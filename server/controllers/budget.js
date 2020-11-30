const Budget = require('../models/budget')

exports.createBudget = async (request, response) => {
    const {name, userId} = request.body; 
    let budget = await Budget.create({name, userId});
    return response.status(200).json(budget);
};

exports.updateBudget = async (request, response) => {
    const {_id, total} = request.body;
    const budget = await Budget.findOneAndUpdate({_id: _id}, { $set: {total: total} },{new: true});

    if (budget) {
        console.log('Budget update', budget);
        response.status(202).json(budget);
    } else {
        response.status(404); 
    }
}