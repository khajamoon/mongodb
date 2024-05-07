const mongoose = require('mongoose');
 
module.exports.connect = () => {
    // This function connects to the MongoDB database hosted on MongoDB Atlas
    mongoose.connect('mongodb+srv://khajashaikofficial:cFJj3WSrC9fMVpfB@test-pro-db.hpqyj9y.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db',
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}