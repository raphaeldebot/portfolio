// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.primaryText};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Styles de la barre de défilement */
  ::-webkit-scrollbar {
    width: 8px;
    background: ${({ theme }) => theme.colors.secondaryBackground};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accentPurple};
    border-radius: 4px;
  }

  /* Styles globaux pour les liens */
  a {
    color: ${({ theme }) => theme.colors.accentBlue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
