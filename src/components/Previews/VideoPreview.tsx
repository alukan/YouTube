import React from 'react';
import { Link } from 'react-router-dom';
import { VideoFromSearch } from '../../types/PreviewTypes';
import { StyledVideoPreview } from '../../styles/VideoPreviewStyles';
import { useOnGoingContext } from '../../StateContext';


const VideoPreview: React.FC<{ videos: VideoFromSearch[], index: number }> = ({ videos, index }) => {
    const { setState: setOnGoing } = useOnGoingContext();
    return (
        <Link to={`/video?v=${videos[index].id.videoId}`}
            onClick={() => { setOnGoing(videos.slice(index)) }}>
            <StyledVideoPreview>

                <img src={videos[index].snippet.thumbnails.url} alt={videos[index].title} />
                <h3>{videos[index].title}</h3>

            </StyledVideoPreview>
        </Link>

    );
};

export default VideoPreview;
