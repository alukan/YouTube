import React from 'react';
import { Link } from 'react-router-dom';
import { VideoFromSearchObject } from '../../types/PreviewTypes';
import { StyledVideoPreview } from '../../styles/VideoPreviewStyles';



const VideoPreview: React.FC<VideoFromSearchObject> = ({ video }) => {
    return (

            <Link to={`/video?v=${video.id.videoId}`}>
                <StyledVideoPreview>
                
                    <img src={video.snippet.thumbnails.url} alt={video.title} />
                    <h3>{video.title}</h3>

                </StyledVideoPreview>
            </Link>

    );
};

export default VideoPreview;
