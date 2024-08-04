"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      maxPageWidth: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      maxPageWidth?: string;
    };
  }
}

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
    fontFamily: inter.style.fontFamily,
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
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "20px",
          maxWidth: "1280px", // Default max width
          "@media (max-width:1280px)": {
            maxWidth: "100%",
          },
          "@media (max-width:960px)": {
            // maxWidth: "100%",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase text
          borderRadius: 0, // Custom border radius
          padding: 0,
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
  custom: {
    maxPageWidth: "1920px", // Add custom variable here
  },
});

export default theme;
