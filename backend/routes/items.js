import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await Item.find({});
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    const { name, category, date } = req.body;
    try {
        const newItem = new Item({ name, category, date });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, category, date } = req.body;

    try {
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { name, category, date },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
export default router;
