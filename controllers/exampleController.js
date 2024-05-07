const ExampleModel = require('../models/exampleModel');
 
exports.exampleControllerFunction = (req, res) => {
    // This function is an example controller function to handle requests
    // It may interact with the model and send responses back to the client
 
    // Example: Fetch data from the model
    ExampleModel.find({}, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(data);
    });
};

// controllers/exampleController.js
 
const Item = require('../models/itemModel');
 
// GET all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
 
// POST a new item
exports.createItem = async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
 
// PUT update an item
exports.updateItem = async (req, res) => {
    try {
const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
 
// DELETE an item
exports.deleteItem = async (req, res) => {
    try {
await Item.findByIdAndDelete(req.params.id);
        res.status(204).send(); // No content to send back
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};