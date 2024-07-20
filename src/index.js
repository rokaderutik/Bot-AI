import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material";

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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          textTransform: "none",
          fontSize: "20px",
          fontWeight: "400",
          color: "#000",
          backgroundColor: "#D7C7F4",
          height: "42px"
        },
        contained: {
          color: "#000",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: "auto",
          boxSizing: "border-box"
        },
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
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
        },
        h4: {
          color: "#000",
          fontSize: "16px",
          fontWeight: "700"
        },
        h5: {
          color: "#0000009E",
          fontSize: "12px",
          fontWeight: "400"
        }
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#fff",
          borderRadius: "5px",
          color: "#000",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#00000073",
            },
          "& .MuiOutlinedInput-root": {
            height: "42px"
          }
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          boxSizing: "border-box"
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
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
