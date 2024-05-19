import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Crea un tema de Material UI (puedes personalizarlo)
const theme = createTheme();

// Obtiene la referencia al elemento root del HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del ThemeProvider
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);