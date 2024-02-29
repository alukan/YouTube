import React from 'react';
import { useLocation } from 'react-router-dom';
import YouTubePlayer from '../components/VideoPage/YouTubePlayer';
import VideoDetail from '../components/VideoPage/VideoDetailts';
import SearchComponent from '../components/SearchComponent';
import { LayoutContainer, MainContent, SideContent } from '../styles/VideoPageStyles';

const VideoPage: React.FC = () => {

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get('v') || '';

  return (
    <LayoutContainer>
      <MainContent>
        <h1>Video Detail</h1>
        {videoId && (
          <>
            <YouTubePlayer videoId={videoId} />
            <VideoDetail videoId={videoId} />
          </>
        )}
      </MainContent>
      <SideContent>
        <SearchComponent />
      </SideContent>
    </LayoutContainer>
  );
};

export default VideoPage;
