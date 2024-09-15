import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material"; // Import Fab (Floating Action Button)
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // Import the icon
import theme from "@/theme/theme";
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Fab
          color="primary" // Set button color to primary
          aria-label="back to top"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: { xs: 10, sm: 10, md: 20, lg: 30, xl: 40 },
            right: { xs: 10, sm: 10, md: 20, lg: 30, xl: 40 },
            backgroundColor: theme.palette.primary.main, // Red background color to match the image
            color: "white", // White icon color
            opacity: 0.8,
            transition: "opacity 0.3s ease-in-out",
            "&:hover": {
              opacity: 1,
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  );
};

export default BackToTopButton;
