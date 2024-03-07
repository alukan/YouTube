import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import VideoPreviewContainer from '../Previews/VideoPreviewContainer';
import { VideoFromSearch } from '../../types/PreviewTypes';

const OnePlaylist: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState<VideoFromSearch[]>([]);

  useEffect(() => {
    const playlistId = searchParams.get('id');

    const fetchPlaylist = async () => {
      try {
        const playlistResponse = await axios.get(`https://youtube.thorsteinsson.is/api/playlists/${playlistId}`);
        const videos = [];
        for (const video of playlistResponse.data.videos) {
          const result = await axios.get(`https://youtube.thorsteinsson.is/api/videos/${video.videoId}`);

          const structuredVideo: VideoFromSearch = {
            id: {
              videoId: result.data.videoId
            },
            title: result.data.title,
            description: result.data.description,
            snippet: {
              thumbnails: {
                url: result.data.thumbnailUrl
              }
            }
          }
          videos.unshift(structuredVideo);
        }
        setVideos(videos);
      } catch (error) {
        console.error('Error fetching playlist details:', error);
      }
    };

    fetchPlaylist();
  }, []);

  return (
    <>{videos.length > 0 ? <VideoPreviewContainer items={videos}/> : <h2>It is empty</h2>}</>
  );
};

export default OnePlaylist;
