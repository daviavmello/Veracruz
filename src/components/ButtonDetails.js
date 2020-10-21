import styled from 'styled-components';

export const ButtonDetails = styled.button`
  text-transform: capitalize;
  margin: 0.5rem 0.3rem 0.5rem 0;
  padding: 0.5rem 0.7rem 0.3rem 0.7rem;
  background: transparent;
  border: none;
  border: 0.15rem solid #e5e5e5;
  border-radius: 0.5rem;
  border-color: ${props => props.selected ? "#e5e5e5" : "var(--primaryColor)"};
  color: var(--primaryColor);
  cursor: pointer;
  align-content: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--terciaryColor);
  }
  &:focus {
    outline: none;
  }
`