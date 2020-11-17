const { request } = require('express');
const admin = require('../firebase'); 
const User = require('../models/user')

exports.authCheck = async (request, response, nextMethod) => {
    //console.log(request.headers); // el token
    try {
        const firebaseUser = await admin.auth().verifyIdToken(request.headers.authtoken)
       // console.log('Firebase user authcheckeck', firebaseUser); works
        request.user = firebaseUser;
        nextMethod();
    } catch (error) {
        response.status(401).json({
            error: 'Token expirado o inválido', 
        });
    }
}

exports.adminCheck = async (request, response, next) => {
    const {email} = request.user;

    const adminUser = async = await User.findOne({email}).exec()

    if(adminUser.role !== 'admin'){
        response.status(403).json({
            error: 'Acceso denegado', 
        })
    } else {
        next();
    }

};
