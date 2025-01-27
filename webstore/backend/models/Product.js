const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productNames: { 
        type: String,
       },
});
module.exports = mongoose.model('Product', productSchema);