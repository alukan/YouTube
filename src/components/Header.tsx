import React from 'react';
import { FiHome, FiArrowLeft, FiMoreHorizontal } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { StyledHeader, BackButton, StyledNav } from '../styles/HeaderStyles'

const Header: React.FC<{setShow: React.Dispatch<React.SetStateAction<boolean>>}> = ({ setShow }) => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <BackButton onClick={() => navigate(-1)}>
        <FiArrowLeft size={24} />
      </BackButton>
      <BackButton onClick={() => setShow(prev => !prev)}>
        <FiMoreHorizontal size={24} />
      </BackButton>
      <StyledNav>
        <Link to="/">
          <FiHome size={24} />
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;

