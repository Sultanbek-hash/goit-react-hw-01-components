import React from 'react';
import ReactDOM from 'react-dom/client';
import { App} from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    backgroundColor: '#E7ECF2',
    white: '#ffffff',
    tableColor: '#00BCD5',
    shiftColor: '#35475A',
    red: '#F6182B',
    green: '#00ff45',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    <GlobalStyle />
    
  </React.StrictMode>
);
