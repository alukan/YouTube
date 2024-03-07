import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import VideoPreviewsPage from './pages/videoPage';
import Main from './pages/Main';
import Header from './components/Header';
import styled from 'styled-components';
import LeftSlideMenu from './components/Menu';
import { useOnLoginContext, useUserContext } from './StateContext';
import LoginPage from './pages/Login'
import SignupPage from './pages/signUp';

const MainContent = styled.div`
  padding-top: 50px;
`;

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  const { state: onLogin } = useOnLoginContext();
  const { state: userState, setState: setUserState } = useUserContext();

  useEffect(()=>{
    const userLocal = localStorage.getItem('user');
    if (userLocal){
      setUserState(userLocal)
    }
  }, [])
  return (
    <BrowserRouter>
      {!onLogin && <Header setShow={setShow} />}
      <MainContent>
        {show && <LeftSlideMenu />}
        <Routes>
          <Route path="*" element={!userState && <Navigate to="/login" replace />} />
          <Route path="/video" element={!userState ? <Navigate to="/login" replace /> : <VideoPreviewsPage />} />
          <Route path="/" element={!userState ? <Navigate to="/login" replace /> : <Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </MainContent>
    </BrowserRouter>
  );
};

export default App;