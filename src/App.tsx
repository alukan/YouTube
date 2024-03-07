import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import VideoPreviewsPage from './pages/videoPage';
import Main from './pages/main';
import Header from './components/Header';
import styled from 'styled-components';
import LeftSlideMenu from './components/Menu';
import { useOnLoginContext, useUserContext } from './StateContext';
import LoginPage from './pages/login'
import SignupPage from './pages/signUp';
import Playlist from './pages/playlistsPage'; 

const MainContent = styled.div`
  padding-top: 50px;
`;

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  const { state: onLogin } = useOnLoginContext();
  const { state: userState, setState: setUserState } = useUserContext();
  const userLocal = localStorage.getItem('user')

  useEffect(() => {
    if (userLocal) {
      setUserState(userLocal)
    }
  }, [])

  return (
    <BrowserRouter>
      {!onLogin && <Header setShow={setShow} />}
      <MainContent>
        {!onLogin && show && <LeftSlideMenu />}
        <Routes>
          <Route path="*" element={(!userState && !userLocal) ? <Navigate to="/login" replace /> : <Navigate to="/" replace />} />
          <Route path="/video" element={(!userState && !userLocal) ? <Navigate to="/login" replace /> : <VideoPreviewsPage />} />
          <Route path="/" element={(!userState && !userLocal) ? <Navigate to="/login" replace /> : <Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/playlist" element={(!userState && !userLocal) ? <Navigate to="/login" replace /> : <Playlist />} />
        </Routes>
      </MainContent>
    </BrowserRouter>
  );
};

export default App;