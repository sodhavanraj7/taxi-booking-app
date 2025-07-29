/*import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required /><br /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register; */

import React, { useState } from 'react';
import API from '../api'; // 👈 Make sure this path is correct based on your project structure

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // For register
            const res = await API.post('/auth/register', formData);
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required /><br /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;


