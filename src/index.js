import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material";
import { Padding } from '@mui/icons-material';

//Theme object created using createTheme to override the CSS styles of MUI library
export const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu , Open Sans",
  },
  palette: {
    primary: {
      main: "#D7C7F4",
      secondary: "#D7C7F421",
    },
  },
  MuiTypography: {
    styleOverrides: {
      h1: {
        color: "#000000",
        fontSize: "56px",
        fontWeight: "700",
      },
      h2: {
        color: "#1B3C74",
        fontWeight: "600",
        fontSize: "48px",
        lineHeight: 1.2,
      },
      h4: {
        color: "#000000",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "23px"
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
