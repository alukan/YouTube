import styled from 'styled-components';


export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const MainContent = styled.div`
  flex: 70%;
`;

export const SideContent = styled.div`
  flex: 30%; // 30% of the container's width
`;

export const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

export const OwnerAndDate = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

export const Views = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #444;
`;

export const PlayerContainer = styled.div`
  width: 100%; 
  margin: auto; 
  padding-top: 43%; 
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;