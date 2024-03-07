import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post('/user', { username });
            
            if (response.status === 200 || response.status === 201) {
                alert('Signup successful. Please log in.');
                navigate('/login'); 
            } else {
                alert('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Signup request failed:', error);
            alert('Signup request failed. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Choose your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
    );
};

export default SignupPage;
