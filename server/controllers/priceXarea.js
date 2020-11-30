const Pricing = require('../models/priceXarea')

exports.createPricePerArea = async (request, response) => {
    const {minPrice, priceArea, prodId} = request.body; 

    let pricing = await Pricing.create({
        minPrice, priceArea, prodId})
        return response.status(200).json(pricing);
};

exports.getPriceAreaByProductId = async (request, response) => {
    await Pricing.findOne({prodId: request.params.prodId}).exec((error, pricing) => {
        if (error) throw new Error(error);
        response.json(pricing); 
    })
}