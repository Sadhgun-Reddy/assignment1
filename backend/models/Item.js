import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
