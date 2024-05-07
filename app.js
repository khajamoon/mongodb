// app.js
 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
 
// Import routes
const apiRoutes = require('./routes/apiRoutes');
 
// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://khajashaikofficial:cFJj3WSrC9fMVpfB@test-pro-db.hpqyj9y.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
 
// Middleware
app.use(express.json());
 
// Routes
app.use('/api', apiRoutes); // Prefix all API routes with '/api'
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});