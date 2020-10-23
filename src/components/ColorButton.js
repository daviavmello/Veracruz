import styled from 'styled-components';

export const ColorButton = styled.button.attrs(props => ({
    className: props.className,
  }))`
  
  width: 2.5rem;
  height: 2.5rem;
  border: 0.2rem solid var(--secondaryColor);
  box-shadow: 0 0 0 0.1rem var(--primaryColor);
  background: var(--primaryColor);
  border-radius: 3rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:active {
    background: var(--primaryColor);
  }
  &.button-white {
    background: #fff;
    margin-right: 0.7rem;
  } 
  // &:hover {
  //   background: var(--terciaryColor);
  //   color: var(--secondaryColor);
  // }
  &:focus {
    outline: none;
  }
  `