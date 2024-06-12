import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ setItems }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name, category, date };
        const response = await axios.post('http://localhost:5000/api/items', newItem);
        setItems(items => [...items, response.data]);
        setName('');
        setCategory('');
        setDate('');
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;
