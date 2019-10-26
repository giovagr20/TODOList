const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const {mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 3000); //Port run


//middlewares

app.use(cors({origin: 'http://localhost:4200'})); //Conection between front and server
app.use(express.json());

//routes
app.use('/api/products', require('./routes/routes.products'));


app.listen(app.get('port'), (req,res)=>{
console.log('Server is running on port: ' + app.get('port'));

})