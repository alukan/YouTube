import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useOnLoginContext, useUserContext } from '../StateContext';
import axios, { isAxiosError } from '../axiosConfig';
import { StyledInput, StyledButton, StyledForm, AlignedContainer } from '../styles/RegularStyles';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const { setState: setOnLogin } = useOnLoginContext();
    const { setState: setUserState } = useUserContext();

    useEffect(() => setOnLogin(true), [])

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.get(`/userExists/${username}`);

            if (response.status === 200) {
                localStorage.setItem('user', username);
                setUserState(username)
                setOnLogin(false)
                navigate('/');
            } else {
                alert('No such user exists. Please sign up.');
            }
            //eslint-disable-next-line
        } catch (error: any) {
            if (isAxiosError(error) && error.response) {
                alert(error.response.data.error);
            }
            else {
                alert('Login request failed. Please try again later.');
            }
        }
    };

    return (
        <AlignedContainer>
            <StyledForm onSubmit={handleLogin}>
                <h2>Login</h2>
                <StyledInput
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <StyledButton type='submit'>Login</StyledButton>
                <p>Don&apos;t have an account?<Link to="/signup"> Sign up</Link></p>
            </StyledForm>
        </AlignedContainer>
    );
};

export default LoginPage;
