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
      pallete?: {
        grey?: string;
        greydark?: string;
        background?: {
          dark?: string;
        };
      };
      maxPageWidth: string;
      animation?: {
        duration?: {
          fast: number;
          medium: number;
          slow: number;
        };
      };
      borderRadius?: {
        brand?: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      pallete?: {
        grey?: string;
        greydark?: string;
        background?: {
          dark?: string;
        };
      };
      maxPageWidth?: string;
      animation?: {
        duration?: {
          fast: number;
          medium: number;
          slow: number;
        };
      };
      borderRadius?: {
        brand?: string;
      };
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
      primary: "#000000", // Primary text color
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
      fontWeight: 700,
      fontSize: 41,
      // fontFamily: "Inter",
      fontStyle: "italic",
      "@media (max-width:600px)": {
        fontSize: 32,
      },
      "@media (max-width:960px)": {
        fontSize: 37,
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width:600px)": {
        // fontSize: "0.875rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // position: "relative",
          // width: "100vw",
          // overflow: "hidden",
        },
        span: {
          fontSize: "inherit",
        },
        a: {
          textDecoration: "none!importnat",
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "50px",
          maxWidth: "1280px", // Default max width
          "@media (max-width:1280px)": {
            padding: 24,
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
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "none",
          borderRadius: 0,
          // border: "1px solid black",
          boxShadow: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(255 255 255 / 74%)",
            color: "rgb(255 255 255 / 74%)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(255 255 255 / 100%)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 53, 24, 1)",
            color: "rgba(255, 53, 24, 1)",
          },
          "& .MuiInputBase-input": {
            color: "rgb(255 255 255 / 100%)",
            "@media (max-width:600px)": {
              background: "#DFDFDF",
              borderRadius: "8px",
              color: "#000000",
            },
            // "@media (max-width:960px)": {
            //   fontSize: 37,
            // },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgb(255 255 255 / 74%)", // Default label color
          "@media (max-width:600px)": {
            color: "#000000",
          },
          "&.Mui-focused": {
            "@media (max-width:600px)": {
              borderColor: "rgba(255, 53, 24, 1)",
              color: "rgba(255, 53, 24, 1)",
            },
            color: "rgba(255, 53, 24, 1)", // Label color when focused
          },
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
    pallete: {
      grey: "#DFDFDF",
      greydark: "#828282",
      background: {
        dark: "#232421",
      },
    },
    maxPageWidth: "1920px", // Add custom variable here
    animation: {
      duration: {
        fast: 0.2,
        medium: 0.5,
        slow: 1,
      },
    },
    borderRadius: {
      brand: "8px",
    },
  },
});

export default theme;
