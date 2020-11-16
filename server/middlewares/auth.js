const { request } = require('express');
const admin = require('../firebase'); 

exports.authCheck = (request, response, nextMethod) => {
    console.log(request.headers); // el token
    nextMethod();
}
