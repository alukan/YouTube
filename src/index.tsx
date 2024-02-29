import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/Main';
import VideoPage from './pages/videoPage';
import Header from './components/Header';
import styled from 'styled-components';

const MainContent = styled.div`
  padding-top: 50px;
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/video" element={<VideoPage />} />
          <Route path="/" element={<App />}></Route>
        </Routes>
      </MainContent>
    </BrowserRouter>
  </React.StrictMode>
);
