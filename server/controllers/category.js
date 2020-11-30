const Category = require("../models/category");
const slugify = require("slugify");

exports.create = async(request, response) => {
    try {
        const { name } = request.body;
        const category = await new Category({ name, slug: slugify(name) }).save();
        response.json(category);
    } catch (error) {
        console.log(error);
        response.status(400).send("Create category failed");
    }
};

exports.list = async(request, response) =>
    response.json(await Category.find({}).sort({ createdAt: -1 }).exec());

exports.read = async(request, response) => {
    let category = await Category.findOne({ slug: request.params.slug }).exec();
    response.json(category);
};

exports.update = async(request, response) => {
    const { name } = request.body;
    try {
        const updated = await Category.findOneAndUpdate({ slug: request.params.slug }, { name, slug: slugify(name) }, { new: true });
        response.json(updated);
    } catch (error) {
        response.status(400).send("Create update failed");
    }
};

exports.remove = async(request, response) => {
    try {
        const deleted = await Category.findOneAndDelete({
            slug: request.params.slug,
        });
        response.json(deleted);
    } catch (error) {
        response.status(400).send("Create delete failed");
    }
};