import { createGlobalStyle } from 'styled-components';

import { theme } from '@src/theme';

import { font, width100 } from './mixins';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    ${font({ size: '16', lineHeight: '22' })}
    overflow-x: hidden;
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:active,
    &:focus {
      border: none;
      outline: none;
    }
  }

  img {
    ${width100}
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

`;
