 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
 
// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: true })); // Parse incoming request bodies in URL-encoded format
 
module.exports = app;