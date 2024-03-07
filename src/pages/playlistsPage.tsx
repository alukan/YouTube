import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MyPlaylistsComponent from '../components/Playlists/MyPlaylists';
import OnePlaylist from '../components/Playlists/OnePlaylist';

const Playlist: React.FC = () => {
    const [searchParams] = useSearchParams();
    const playlistId = searchParams.get('id');
    const owner = searchParams.get('owner');
    return (
        <>
            {!playlistId ? <MyPlaylistsComponent username={owner}/> : <OnePlaylist />}
        </>
    );
};

export default Playlist;
