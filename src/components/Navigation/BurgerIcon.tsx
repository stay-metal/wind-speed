import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { fadeIn } from "@/utils/animation/framerAnimations";
import { motion } from "framer-motion";

type BurgerIconProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const BurgerIcon: React.FC<BurgerIconProps> = ({ isOpen, toggleOpen }) => {
  console.log(`BurgerIcon isOpen: ${isOpen}`); // Check initial state

  // Define animation properties
  const animationProps = fadeIn(0.4, 0); // Set duration and delay

  return (
    <IconButton
      onClick={() => {
        console.log("IconButton Clicked"); // Verify click event
        toggleOpen(); // Call the passed function
      }}
      sx={{
        color: "white",
        padding: 0,
        width: { xs: "23px", sm: "30px", md: "37px", lg: "37px" },
        height: { xs: "23px", sm: "24px", md: "30px", lg: "30px" },
        overflow: "hidden",
        borderRadius: 0,
      }}
      disableFocusRipple
      disableRipple
    >
      <Box
        component={motion.div}
        {...fadeIn(0.4, 0)}
        sx={{
          position: "relative",
          width: { xs: "23px", sm: "30px", md: "37px", lg: "37px" },
          height: { xs: "23px", sm: "30px", md: "30px", lg: "30px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Burger Icon */}
        {!isOpen && (
          <motion.svg
            width="37"
            height="30"
            viewBox="0 0 37 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={animationProps.initial}
            animate={animationProps.animate}
            exit={animationProps.exit}
            transition={animationProps.transition}
          >
            <rect width="37" height="5.29412" rx="2.64706" fill="white" />
            <rect
              y="12.3529"
              width="37"
              height="5.29412"
              rx="2.64706"
              fill="white"
            />
            <rect
              y="24.7059"
              width="28.1905"
              height="5.29412"
              rx="2.64706"
              fill="white"
            />
          </motion.svg>
        )}

        {/* Cross Icon */}
        {isOpen && (
          <motion.svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={animationProps.initial}
            animate={animationProps.animate}
            exit={animationProps.exit}
            transition={animationProps.transition}
          >
            <path
              d="M27.6923 2.30774L2.30768 27.6924M2.30768 2.30774L27.6923 27.6924"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </Box>
    </IconButton>
  );
};

export default BurgerIcon;
