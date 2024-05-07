const mongoose = require('mongoose');
 
const exampleSchema = new mongoose.Schema({
    // This schema defines the structure of your data
    // Define your schema fields here
    name: String,
    age: Number,
    email: String
});
 
module.exports = mongoose.model('Example', exampleSchema)