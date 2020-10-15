import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background: transparent;
  border: none;
  color: var(--secondaryColor);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--terciaryColor);
  }
`