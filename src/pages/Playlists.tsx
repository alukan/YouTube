import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MyPlaylistsComponent from '../components/Playlists/MyPlaylists';
import OnePlaylist from '../components/Playlists/PlaylistComponent';

const Playlist: React.FC = () => {
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get('id');

  return (
    <>
    {!playlistId ? <MyPlaylistsComponent /> : <OnePlaylist />}
    </>
  );
};

export default Playlist;
