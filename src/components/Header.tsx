import React from 'react';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { StyledHeader, BackButton, StyledNav } from '../styles/HeaderStyles'

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <StyledHeader>
      <BackButton onClick={() => navigate(-1)}>
        <FiArrowLeft size={24} />
      </BackButton>
      <StyledNav>
        <Link to="/">
          <FiHome size={24} />
        </Link>
        <button onClick={handleSubmit}>
          <FiHome size={24} />
        </button>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;

