import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.colors.bodyBg};
  }

`;
