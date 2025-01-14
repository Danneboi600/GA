const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName: { 
        type: String,
       },
    productPrice: {  
        type: Number
        },
    productImage: {
        type: String,
    }
});
module.exports = mongoose.model('Student', productSchema);