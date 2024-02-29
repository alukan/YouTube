import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Title, OwnerAndDate, Views, Description } from '../../styles/VideoPageStyles';
import { VideoData, VideoDetailProps } from '../../types/VideoPageTypes';

const VideoDetail: React.FC<VideoDetailProps> = ({ videoId }) => {
    const [details, setDetails] = useState<VideoData | null>(null);

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await axios.get(`https://youtube.thorsteinsson.is/api/videos/${videoId}`);
                setDetails(response.data);
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };

        fetchVideoData();
    }, [videoId]);

    if (!details) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Title>{details.title}</Title>
            <OwnerAndDate>Published by {details.owner} on {new Date(details.datePublished).toLocaleDateString()}</OwnerAndDate>
            <Views>Views: {details.views}</Views>
            <Description>{details.description}</Description>
        </Container>
    );
};

export default VideoDetail;
