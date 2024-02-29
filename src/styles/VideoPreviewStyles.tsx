
import styled from 'styled-components';

export const StyledVideoPreview = styled.div`
  img {
    width: 100%;
    height: auto;
    max-width: 360px;
  }

  @media (max-width: 768px) {
    img {
      max-width: 240px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 180px;
    }
  }
  display: block;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden; 
  background-color: #fff; 
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  h3 {
    padding: 12px; 
    margin: 0; 
    font-size: 1rem;
    color: #333; 
    text-align: center;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`;


export const StyledVideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px; 
  margin: 20px;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;