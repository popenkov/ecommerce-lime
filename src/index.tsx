import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import "normalize.css";
import App from "./App";
import { store } from "./store";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <GlobalStyle />
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
