import React from 'react';
import VideoPreview from './VideoPreview';
import { VideoFromSearchArrayProp } from '../../types/PreviewTypes';
import { StyledVideoContainer } from '../../styles/VideoPreviewStyles';



  
  const VideoPreviewContainer: React.FC<VideoFromSearchArrayProp > = ({ items }) => {
    return (
      <StyledVideoContainer>
        {items.map((item, index) => (
          <VideoPreview key={item.id.videoId} videos={items} index={index} />
        ))}
      </StyledVideoContainer>
    );
  };
  
  export default VideoPreviewContainer;
