import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPreviewsPage from './pages/videoPage';
import Main from './pages/Main';
import Header from './components/Header';
import styled from 'styled-components';
import LeftSlideMenu from './components/Menu';

const MainContent = styled.div`
  padding-top: 50px;
`;

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <BrowserRouter>
      <Header setShow={setShow} />
      <MainContent>
        {show && <LeftSlideMenu />}
        <Routes>
          <Route path="/video" element={<VideoPreviewsPage />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </MainContent>
    </BrowserRouter>
  );
};

export default App;