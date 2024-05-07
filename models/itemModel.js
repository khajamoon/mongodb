// models/itemModel.js
 
const mongoose = require('mongoose');
 
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    }
});
 
const Item = mongoose.model('Item', itemSchema);
 
module.exports = Item;
