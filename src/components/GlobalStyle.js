import { createGlobalStyle } from 'styled-components'
import wipe from 'wipe.css'

const GlobalStyle = createGlobalStyle`
  ${wipe}
  html {
    text-rendering: optimizeLegibility;
    font-smoothing: antialised;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'pnum' 0, 'tnum' 1, 'onum' 0, 'lnum' 1, 'dlig' 1, 'zero' 1, 'case' 1;
    background: var(--color-base00);
    color: var(--color-base);
    scroll-behavior: smooth;
  }
  ::selection {
    background: var(--color-base);
    color: var(--color-base00);
  }
  html, body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
  }
`

export default GlobalStyle