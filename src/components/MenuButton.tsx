"use client";
import React from "react";
import { Button, styled } from "@mui/material";
import theme from "@/theme/theme";
import { Roboto } from "@next/font/google";

// Initialize Roboto font styles
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

// Define props for MenuButton component
interface MenuButtonProps {
  text: string;
  width?: number;
  left?: number;
}

// Styled Button component
const StyledButton = styled(Button)<{ width?: number; left?: number }>(
  ({ width, left }) => ({
    width: width,
    maxWidth: "500px",
    textTransform: "uppercase",
    flex: 1,
    fontWeight: 600,
    fontStyle: "italic",
    height: "41px",
    left: left ? `${left}px` : "0px",
    position: "relative",
    opacity: 1,
    overflow: "visible", // Allow the ::before element to be visible
    [theme.breakpoints.down("md")]: {
      // display: "none",
      textAlign: "right",
      minHeight: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      paddingRight: "40px",
      "&::before": {
        minHeight: "40px",
        left: "30px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      // display: "none",
      textAlign: "right",
      minHeight: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      paddingRight: "40px",
      "&::before": {
        minHeight: "40px",
        left: "30px",
      },
    },
    "&:hover": {
      color: theme.palette.primary.main,
      background: "transparent",
    },
    "&::before": {
      opacity: 1,
      content: '""',
      position: "absolute",
      bottom: "1px", // Move down slightly to make it visible outside
      width: width ? `${width}px` : "100%",
      height: "41px", // Height of the parallelogram
      backgroundColor: theme.palette.primary.main,
      transform: "skewX(-9deg)", // Skew the element
      transition: "background-color 0.3s, transform 0.3s",
      zIndex: -1, // Ensure it appears above other elements
    },
    "&:hover::before": {
      opacity: 1,
      backgroundColor: theme.palette.background.paper, // Change color on hover
    },
  })
);

const MenuButton: React.FC<MenuButtonProps> = ({ text, width, left }) => {
  return (
    <StyledButton
      disableRipple
      disableFocusRipple
      disableTouchRipple
      className={roboto.className}
      color="inherit"
      width={width}
      left={left}
    >
      {text}
    </StyledButton>
  );
};

export default MenuButton;
