import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Delete = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3001/users/${name}`);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error deleting user');
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Delete User</h1>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-400 p-2 rounded-md mb-4"
            />
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Delete
            </button>
            {message && <p className="mt-4 text-red-600">{message}</p>}
            <Link to="/" className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
        Back
      </Link>
        </div>
        
    );
};

export default Delete;
