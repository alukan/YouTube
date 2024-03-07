import React, { useState } from 'react';
import { MenuContainer, MenuButton } from '../styles/MenuStyles';
import { StyledInput, StyledButton, StyledForm } from '../styles/RegularStyles';
import axios, { isAxiosError } from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const LeftSlideMenu: React.FC = () => {
    const [playlistName, setPlaylistName] = useState('');
    const [userName, setUserName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const navigate = useNavigate();

    const createHandle = async (event: React.FormEvent) => {
        event.preventDefault();
        const username = localStorage.getItem('user');
        if (!username) {
            alert('No username found. Please log in.');
            return;
        }

        try {
            await axios.post('/addPlaylist', {
                username,
                isPrivate,
                playlistName
            });

            alert('Playlist added successfully.');

            //eslint-disable-next-line
        } catch (error: any) {
            if (isAxiosError(error) && error.response) {
                console.error(error.response.data.error);
                alert(error.response.data.error || 'Failed to add playlist.');
            } else {
                console.error('An unexpected error occurred:', error);
                alert('An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <MenuContainer>
            <MenuButton onClick={(e) => e.stopPropagation()}>
                <h4>Create playlist</h4>
                <StyledForm onSubmit={createHandle}>
                    <StyledInput
                        type="text"
                        placeholder="Playlist Name"
                        value={playlistName}
                        onChange={(e) => setPlaylistName(e.target.value)}
                    />
                    <div>
                        <input
                            type="checkbox"
                            checked={isPrivate}
                            onChange={(e) => setIsPrivate(e.target.checked)}
                        />
                        Make Private
                    </div>
                    <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>
            </MenuButton>

            <MenuButton onClick={(e) => e.stopPropagation()}>
                <h4>Find user&apos;s playlists</h4>
                <StyledForm onSubmit={(event: React.FormEvent) => {
                    event.preventDefault();
                    navigate(`/playlist?owner=${userName}`)
                }}>
                    <StyledInput
                        type="text"
                        placeholder="User's Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>
            </MenuButton>

            <MenuButton onClick={() =>
                navigate('/playlist')
            }><h4>My playlists</h4></MenuButton>

            <MenuButton onClick={() =>
                navigate('/login')
            }><h4>Change user</h4></MenuButton>
        </MenuContainer>
    );
};

export default LeftSlideMenu;