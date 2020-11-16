const { request } = require('express');
const admin = require('../firebase'); 

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
