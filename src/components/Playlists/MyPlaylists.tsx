import React, { useEffect, useState, useRef } from 'react';
import axios, { isAxiosError } from '../../axiosConfig';
import { StyledList, StyledListItem, StyledButton } from '../../styles/RegularStyles';
import { Link } from 'react-router-dom';

interface PlaylistItem {
    id: string;
    name: string;
}

const MyPlaylistsComponent: React.FC<{ username: string | null }> = ({ username }) => {
    const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
    const ownRepo = useRef<boolean>(!username);
    const sendingUser = localStorage.getItem('user') as string;

    useEffect(() => {
        const fetchPlaylists = async () => {
            if (!username) {
                username = localStorage.getItem('user') as string;
            }


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
    }, [playlists]);


    return (
        <>
            {playlists.length > 0 ? <div
                style={{
                    width: '33.3%',
                    margin: '0 auto',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <h2>Playlists</h2>
                <StyledList>
                    {playlists.map((playlist) => (
                        <StyledListItem key={playlist.id}>
                            <Link to={`/playlist?id=${playlist.id}`}>
                                {playlist.name}
                            </Link>
                            {ownRepo ? <StyledButton onClick={async () => {
                                try {
                                    await axios.delete(`/user/${sendingUser}/playlist/${playlist.id}`)
                                    playlists.unshift({ id: playlist.id, name: playlist.name }); // just to trigger useEffect
                                } catch (error) {
                                    console.error("Could not delete: " + error)
                                }
                            }}>delete</StyledButton> : null}
                        </StyledListItem>

                    ))}
                </StyledList>
            </div> : <h2>User has no publick playlists</h2>}
        </>
    );
};

export default MyPlaylistsComponent;
