import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
            await axios.post('http://localhost:8099/api/users/register', formData);
            alert('User registered successfully!');
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert('Error registering user.');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="email" placeholder="Email" onChange={handleChange} required />
                <input name="username" placeholder="Username" onChange={handleChange} required />
                <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
                <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                <input name="address" placeholder="Address" onChange={handleChange} required />
                <input name="age" placeholder="Age" type="number" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account?{' '}
                <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/login')}>
                    Login here
                </span>
            </p>
        </div>
    );
};

export default Register;
