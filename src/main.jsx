import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e49102'
    },
    secondary: {
      main: green[500]
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
