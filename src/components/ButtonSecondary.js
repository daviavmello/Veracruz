import styled from 'styled-components';

export const ButtonContainerSecondary = styled.button`
  text-transform: uppercase;
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 0.5rem 0.7rem 0.3rem 0.7rem;
  background: transparent;
  border: 0.15rem solid var(--primaryColor);
  border-radius: 0.5rem;
  border-color: ${props => props.cart ? "var(--terciaryColor)" : "var(--primaryColor)"};
  color: ${props => props.cart ? "var(--terciaryColor)" : "var(--primaryColor)"};
  cursor: pointer;
  align-content: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--primaryColor);
    color: var(--secondaryColor);
  }
  &:focus {
    outline: none;
  }
`