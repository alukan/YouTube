import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const OnePlaylist: React.FC = () => {
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get('id'); 

  useEffect(() => {
    if (!playlistId) {
      console.log('Playlist ID is required');
      return;
    }

    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`https://youtube.thorsteinsson.is/api/playlists/${playlistId}`);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchPlaylist();
  }, [playlistId]); 

  return (
    <div>
      Fetching playlist data for ID: {playlistId}
    </div>
  );
};

export default OnePlaylist;
