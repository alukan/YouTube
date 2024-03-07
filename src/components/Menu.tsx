import React, { useState } from 'react';
import { MenuContainer, MenuButton } from '../styles/MenuStyles';
import { StyledInput, StyledButton, StyledForm } from '../styles/RegularStyles';
import axios, { isAxiosError } from '../axiosConfig';

const LeftSlideMenu: React.FC = () => {
    const [playlistName, setPlaylistName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const createHandle = async (event: React.FormEvent) => {
        event.preventDefault();
        alert(playlistName)
        const username = localStorage.getItem('user');
        if (!username) {
            alert('No username found. Please log in.');
            return;
        }

        try {
            const response = await axios.post('/addPlaylist', {
                username, 
                isPrivate, 
                playlistName
            });

            console.log(response.data.message);
            alert('Playlist added successfully.');

        //eslint-disable-next-line
        } catch (error : any) {
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
                <h4>Create Form</h4>
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
        </MenuContainer>
    );
};

export default LeftSlideMenu;