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

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; 
  max-width: 500px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;


