const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');
const authMiddleware = require('../middleware/authMiddleware');
 
router.get('/', authMiddleware, exampleController.exampleControllerFunction);
// This defines a route that requires authentication middleware before accessing the controller function
 
module.exports = router;