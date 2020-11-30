const Pricing = require('../models/priceXquantity')

exports.createPricePerQuantity = async (request, response) => {
    const {price, prodId} = request.body; 

    let pricing = await Pricing.create({
        price, prodId})
        return response.status(200).json(pricing);
};

exports.getPriceQuantityByProductId = async (request, response) => {
    await Pricing.findOne({prodId: request.params.prodId}).exec((error, pricing) => {
        if (error) throw new Error(error);
        response.json(pricing); 
    })
}