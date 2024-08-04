"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 53, 24, 1)", // Primary color
    },
    secondary: {
      main: "rgba(29, 30, 26, 1)", // Secondary color
    },
    background: {
      default: "rgba(243, 243, 243, 1)", // Background color
      paper: "#ffffff", // Paper color
    },
    text: {
      primary: "#333333", // Primary text color
      secondary: "#555555", // Secondary text color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Custom font family
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.875rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase text
          borderRadius: 8, // Custom border radius
          padding: "10px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
