import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 500px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 10; // High z-index to ensure it's above other content
`;

export const MenuButton = styled.button`
  flex-grow: 1;
  padding: 20px;
  border: none;
  border-bottom: 1px solid #ddd; // Separating lines
  background-color: #f0f0f0;
  color: #000;
  text-align: left;
  cursor: pointer;

  &:last-child {
    border-bottom: none; // Remove bottom border for the last button
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;