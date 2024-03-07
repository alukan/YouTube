import React, { useEffect, useState } from 'react';
import axios, { isAxiosError } from '../../axiosConfig';
import { StyledList, StyledListItem } from '../../styles/RegularStyles';
import { Link } from 'react-router-dom';

interface PlaylistItem {
    id: string;
    name: string;
}

const MyPlaylistsComponent: React.FC<{ username: string | null }> = ({ username }) => {
    const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            if (!username) {
                username = localStorage.getItem('user') as string;
            }
            const sendingUser = localStorage.getItem('user') as string;


            //check existing
            try {
                await axios.get(`/userExists/${username}`);
                //eslint-disable-next-line
            } catch (error: any) {
                if (isAxiosError(error) && error.response) {
                    alert(error.response.data.error);
                }
                else {
                    alert('Owner does not exist.');
                }
                return;
            }

            //get playlists
            try {
                const response = await axios.post(`/user/${username}/playlists`, {
                    fromUser: sendingUser,
                });

                setPlaylists(response.data);
                //eslint-disable-next-line
            } catch (error: any) {
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

    return ( // StyledList, StyledListItem 
        <div
            style={{
                width: '33.33%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <h2>Playlists</h2>
            <StyledList>
                {playlists.map((playlist) => (

                    <Link key={playlist.id} to={`/playlist?id=${playlist.id}`}>
                        <StyledListItem >
                            {playlist.name}
                        </StyledListItem>
                    </Link>

                ))}
            </StyledList>
        </div>
    );
};

export default MyPlaylistsComponent;
