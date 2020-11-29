const Product = require('../models/product')

exports.createOrUpdateProduct = async (request, response) => {
    const {id} = request.product; 

    let product = await Product.findOneAndUpdate(
        {id: id}, {name}, {description}, {image}, {category}, {hidden}, {new: true})

    if (product) {
        console.log('Product update', product)
        response.json(product)
    } else {
        console.log('Product create', product)
        const newProduct = await new Product({
            name,
            description,
            image,
            category
        }).save();
        response.json(newProduct); 
    }
};