const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({

    Name:{type: String, required:true},
    Description:{type: String, required:true},
    Isavailable:{type: Boolean, required: true},
    Price:{type: Number, required: true},


});

module.exports = mongoose.model('Product', productSchema);