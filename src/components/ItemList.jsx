import React, { useState } from 'react';
import axios from 'axios';

const ItemList = ({ items, setItems }) => {
    const [editItemId, setEditItemId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        category: '',
        date: ''
    });

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/items/${id}`);
        setItems(items.filter(item => item._id !== id));
    };

    const handleEditClick = (item) => {
        setEditItemId(item._id);
        setEditFormData({
            name: item.name,
            category: item.category,
            date: item.date
        });
    };

    const handleEditFormChange = (event) => {
        const { name, value } = event.target;
        setEditFormData({
            ...editFormData,
            [name]: value
        });
    };

    const handleEditFormSubmit = async (event) => {
        event.preventDefault();
        const updatedItem = {
            _id: editItemId,
            name: editFormData.name,
            category: editFormData.category,
            date: editFormData.date
        };

        await axios.put(`http://localhost:5000/api/items/${editItemId}`, updatedItem);
        setItems(items.map(item => (item._id === editItemId ? updatedItem : item)));
        setEditItemId(null);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        {editItemId === item._id ? (
                            <>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editFormData.name}
                                        onChange={handleEditFormChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="category"
                                        value={editFormData.category}
                                        onChange={handleEditFormChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="date"
                                        value={editFormData.date}
                                        onChange={handleEditFormChange}
                                    />
                                </td>
                                <td>
                                    <button onClick={handleEditFormSubmit}>Save</button>
                                    <button onClick={() => setEditItemId(null)}>Cancel</button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.date}</td>
                                <td>
                                    <button onClick={() => handleEditClick(item)}>Edit</button>
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ItemList;
