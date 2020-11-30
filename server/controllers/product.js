const Product = require('../models/product')

exports.createProduct = async (request, response) => {
    const {name, description, image, category} = request.body; 

    let product = await Product.create({
        name, description, image, category})
        return response.status(200).json(product);
};

exports.updateProduct = async (request, response) => {
    const {id, hidden} = request.body;
    const product = await Product.findOneAndUpdate({_id: id}, { $set: {hidden: hidden} },{new: true});
    if (product) {
        console.log('Budget update', product);
        response.status(202).json(product);
    } else {
        return response.sendStatus(404); 
    }
};

exports.findOneProduct = async (request, response) => {
    await Product.findOne({_id: request.params.id}).exec((error, product) => {
        if (error) throw new Error(error);
        response.json(product); 
    })
};

exports.getAllProducts = async (request, response) => {
    await Product.find().exec((error,product) => {
        if (error) throw new Error(error);
        response.json(product); 
    })
};

exports.findProductsByCategory = async (request, response) => {
    await Product.find({category: request.params.category}).exec((error, product) => {
        if (error) throw new Error(error);
        response.json(product); 
    })
};