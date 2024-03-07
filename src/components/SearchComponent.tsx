import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VideoFromSearch } from '../types/PreviewTypes';
import VideoPreviewContainer from './Previews/VideoPreviewContainer';
import { SearchContainer, SearchForm } from '../styles/SearchStyles';
import { StyledInput, StyledButton } from '../styles/RegularStyles';

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState<VideoFromSearch[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get<VideoFromSearch[]>('https://youtube.thorsteinsson.is/api/search?q=react_Web');
        setVideos(response.data.slice(0, 15));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.get<VideoFromSearch[]>(`https://youtube.thorsteinsson.is/api/search?q=${searchQuery}`);
      setVideos(response.data);
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchForm onSubmit={handleSearch}>
          <StyledInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for videos"
          />
          <StyledButton type="submit">Search</StyledButton>
        </SearchForm>
      </SearchContainer>
      
      <VideoPreviewContainer items={videos} />
    </>
  );
};

export default SearchComponent;
