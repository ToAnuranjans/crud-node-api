const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name of product']
    },
    price: {
        type: Number,
        required: [true, 'Please provide price of product']
    },

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;