import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import App from './App';
import { theme } from './theme';
import { GlobalStyle } from './styles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);
