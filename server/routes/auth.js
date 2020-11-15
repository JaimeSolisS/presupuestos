const express = require('express')

const router = express.Router()

router.get('/create-or-update-user', (request, response) => {
    response.json({
        data: 'hit create-or-update-user API endpoint'
    })
})

module.exports= router