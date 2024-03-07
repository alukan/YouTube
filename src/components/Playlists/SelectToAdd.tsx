import React, { useEffect, useState } from 'react';
import axios, { isAxiosError } from '../../axiosConfig';
import { StyledButton, StyledList, StyledListItem } from '../../styles/RegularStyles';


interface PlaylistItem {
    id: string;
    name: string;
}

const SelectPlaylist: React.FC<{ videoID: string }> = ({ videoID }) => {
    const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const username = localStorage.getItem('user');
            if (!username) {
                console.error('No username found in localStorage');
                return;
            }

            try {
                const response = await axios.post(`/user/${username}/playlists`, {
                    fromUser: username,
                });

                setPlaylists(response.data);
                //eslint-disable-next-line
            } catch (error : any) {
                if (isAxiosError(error) && error.response) {
                    console.error(error.response.data.error);
                    alert(error.response.data.error || 'Failed to load playlists your.');
                } else {
                    console.error('An unexpected error occurred:', error);
                    alert('An unexpected error occurred. Please try again later.');
                }
            }
        };

        fetchPlaylists();
    }, []);

    const handleAddToPlaylist = async (playlistId: string) => {
        try {
            await axios.post(
                `https://youtube.thorsteinsson.is/api/playlists/${playlistId}/videos`,
                { videoId: videoID }
            );
            alert('Video added to playlist successfully.');
        } catch (error) {
            console.error('Failed to add video to playlist:', error);
            alert('Failed to add video to playlist.');
        }
    };

    return (
        <div>
            <h2>Playlists</h2>
            <StyledList>
                {playlists.map((playlist) => (
                    <StyledListItem key={playlist.id}>
                        {playlist.name}: 
                        <StyledButton onClick={() => handleAddToPlaylist(playlist.id)}>Add to Playlist</StyledButton>
                    </StyledListItem>
                ))}
            </StyledList>
        </div>
    );
};

export default SelectPlaylist;
