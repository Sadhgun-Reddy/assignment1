import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import '../../src/App.css'; // Import the CSS file

const LandingPage = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortField, setSortField] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/items');
                setItems(response.data);
                console.log(response.data); 
                } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortField(e.target.value);
    };

    const filteredItems = items.filter(item => item.name.includes(filter));
    const sortedItems = filteredItems.sort((a, b) => (a[sortField] > b[sortField] ? 1 : -1));

    return (
        <div className="container">
            <h1>Items</h1>
            <div>
                <input
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Filter by name"
                />
                <select onChange={handleSortChange}>
                    <option value="">Sort by</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                    <option value="category">Category</option>
                </select>
                <ItemForm setItems={setItems} />
                <ItemList items={sortedItems} setItems={setItems} />
            </div>
        </div>
    );
};

export default LandingPage;
