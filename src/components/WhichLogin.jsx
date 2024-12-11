import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhichLogin = () => {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigate('/adminlogin');
    };

    const handleStudentClick = () => {
        navigate('/login');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#000', // Black background for the page
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '400px',
                    textAlign: 'center',
                }}
            >
                <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>
                    Who are you?
                </h2>
                <button
                    onClick={handleAdminClick}
                    style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        margin: '10px 0',
                        width: '100%',
                        transition: 'all 0.3s ease', // Smooth transition for hover effect
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#444'; // Darker black on hover
                        e.target.style.transform = 'scale(1.05)'; // Slight zoom effect
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#000'; // Reset to original color
                        e.target.style.transform = 'scale(1)'; // Reset scale
                    }}
                >
                    Admin
                </button>
                <button
                    onClick={handleStudentClick}
                    style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        margin: '10px 0',
                        width: '100%',
                        transition: 'all 0.3s ease', // Smooth transition for hover effect
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#444'; // Darker black on hover
                        e.target.style.transform = 'scale(1.05)'; // Slight zoom effect
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#000'; // Reset to original color
                        e.target.style.transform = 'scale(1)'; // Reset scale
                    }}
                >
                    Student
                </button>
            </div>
        </div>
    );
};

export default WhichLogin;
