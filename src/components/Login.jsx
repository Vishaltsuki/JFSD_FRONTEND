import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8099/api/users/login', credentials);
            if (response.data.success) {
                alert('Login successful!');
                navigate('/homepage2');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error(error);
            alert('Login failed. Please try again later.');
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Login</h2>
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
                <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleRegisterClick}>
                    Register here
                </span>
            </p>
        </div>
    );
};

export default Login;
