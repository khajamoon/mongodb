// routes/apiRoutes.js
 
const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');
 
// GET all items
router.get('/items', exampleController.getAllItems);
 
// POST a new item
router.post('/items', exampleController.createItem);
 
// PUT update an item
router.put('/items/:id', exampleController.updateItem);
 
// DELETE an item
router.delete('/items/:id', exampleController.deleteItem);
 
module.exports = router;