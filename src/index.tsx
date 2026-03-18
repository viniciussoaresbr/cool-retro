import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import RouteManager from './routes/RouteManager';
import GlobalStyle from './styles/global';
import theme from './styles/theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouteManager />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
