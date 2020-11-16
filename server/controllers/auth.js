const User = require('../models/user')

exports.createOrUpdateUser = async (request, response) => {
    const {email} = request.user; 

    const user = await User.findOneAndUpdate({email: email}, {new: true})

    if (user) {
        console.log('User update', user)
        response.json(user)
    } else {
        console.log('User create', user)
        const newUser = await new User({
            email, 
        }).save();
        response.json(newUser); 
    }
};

exports.currentUser = async (request, response) => {
    (await User.findOne({email: request.user.email})).exec((error, user) => {
        if (error) throw new Error(error);
        response.json(user); 
    })
}