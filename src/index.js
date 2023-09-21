import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AuthProvider } from './state/auth';

import App from './App';
import './index.css';

import { lime, purple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {  	
      main: lime[500],
    },
    secondary: {
      main: purple[800],
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <AuthProvider> 
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

