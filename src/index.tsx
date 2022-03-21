import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import RouteManager from './routes/RouteManager';
import GlobalStyle from './styles/global';
import theme from './styles/theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RouteManager />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
