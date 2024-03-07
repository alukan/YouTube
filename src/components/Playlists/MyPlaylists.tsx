import React, { useEffect, useState } from 'react';
import axios, { isAxiosError } from '../../axiosConfig';

interface PlaylistItem {
  id: string;
  name: string;
}

const MyPlaylistsComponent: React.FC = () => {
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

  return (
    <div>
      <h2>Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <a href={`/playlist?id=${playlist.id}`}>{playlist.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPlaylistsComponent;
