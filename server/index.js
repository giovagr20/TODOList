const express = require('express');
const app = express();
const morgan = require('morgan');

const {mongoose} = require('./database');

app.set('port', process.env.PORT || 3000);




app.listen(app.get('port'), (req,res)=>{
console.log('Server is running on port: ' + app.get('port'));

})