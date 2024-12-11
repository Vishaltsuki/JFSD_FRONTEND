import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8099/api/users/adminlogin', credentials);
            if (response.data.success) {
                alert('Login successful!');
                navigate('/admin-dashboard'); // Redirect to Admin Dashboard
            } else {
                alert(response.data.message || 'Invalid username or password');
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again later.');
        }
    };

    const handleRegisterClick = () => {
        navigate('/adminregister');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#000',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '30px',
                    borderRadius: '10px',
                    width: '400px',
                }}
            >
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <span style={{ cursor: 'pointer' }} onClick={handleRegisterClick}>
                        Register here
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
