import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; // Full width by default
  max-width: 500px; // Max width to prevent the form from becoming too wide

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledInput = styled.input`
  width: 100%; // Take the full width to allow for smaller screens
  margin-bottom: 10px; // Space between input and button on smaller screens
  padding: 8px; // Smaller padding
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (min-width: 600px) {
    margin-right: 8px;
    margin-bottom: 0; // Remove space below for larger screens
  }
`;

export const StyledButton = styled.button`
  width: auto; // Auto width to fit content
  padding: 8px 15px; // Adjust padding to make the button smaller on smaller screens
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 600px) {
    padding: 10px 20px; // Larger padding on larger screens
  }
`;
