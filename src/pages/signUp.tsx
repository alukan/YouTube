import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios, { isAxiosError } from '../axiosConfig';
import { StyledInput, StyledButton, StyledForm, AlignedContainer } from '../styles/RegularStyles';


const SignupPage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('/user', { username });

            if (response.status === 200 || response.status === 201) {
                alert('Signup successful. Please log in.');
                navigate('/login');
            } else {
                alert('Signup failed. Please try again.');
            }
        //eslint-disable-next-line
        } catch (error: any) {
            if (isAxiosError(error) && error.response) {
                alert(error.response.data.error);
            }
            else {
                alert('Signup request failed. Please try again later.');
            }
        }
    };

    return (
        <AlignedContainer>
            <StyledForm onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <StyledInput
                    type="text"
                    placeholder="Choose your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <StyledButton type='submit'>Sign Up</StyledButton>
                <p>
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </StyledForm>
        </AlignedContainer>
    );
};

export default SignupPage;
