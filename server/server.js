const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
require('dotenv').config()


//import routes
//const authRoutes = require('./routes/auth')

//app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: true, 

}).then(() => console.log('DB Connected'))
.catch(error => console.log('Error:', error));

//middlewares
app.use(morgan('dev')); 
app.use(bodyParser.json({limit: '3mb'}));
app.use(cors()); 

//routes middleware
//app.use('/api', authRoutes);
//routes autoloading
fs.readdirSync('./routes').map((route) => 
    app.use('/api', require('./routes/' + route))
);

//route 
/* to routes
app.get('/api', (request, response) => {
    response.json({
        data: 'Esto funciona update'
    })
})
*/

//port 
const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Server is running on port', port));