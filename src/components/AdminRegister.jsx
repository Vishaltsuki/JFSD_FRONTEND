import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        phoneNumber: '',
        address: '',
        age: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const adminDetails = { ...formData, admin: true };
            await axios.post('http://localhost:8099/api/users/adminregister', adminDetails);
            alert('Admin registered successfully!');
            navigate('/adminlogin');
        } catch (error) {
            console.error(error);
            alert('Error registering admin.');
        }
    };

    return (
        <div>
            <h2>Admin Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="email" placeholder="Email" onChange={handleChange} required />
                <input name="username" placeholder="Username" onChange={handleChange} required />
                <input name="password" placeholder="Password" onChange={handleChange} required />
                <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                <input name="address" placeholder="Address" onChange={handleChange} required />
                <input name="age" placeholder="Age" type="number" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AdminRegister;
