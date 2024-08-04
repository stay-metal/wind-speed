import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import theme from "@/theme/theme";

const LanguageSwitcher = () => {
  // State to track the current language
  const [language, setLanguage] = useState<"EN" | "RU">("EN");

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "RU" : "EN"));
  };

  return (
    <Button
      onClick={toggleLanguage}
      disableRipple
      disableFocusRipple
      sx={{
        backgroundColor: "transparent",
        borderRadius: 2,
        height: "46px",
        paddingRight: "20px",
        minWidth: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "700",
        fontSize: "32.84px",
        fontFamily: '"Inter", Arial, sans-serif', // Use your preferred font
        fontStyle: "italic",
        "&:hover": {
          //   backgroundColor: "#ff9100",
        },
      }}
    >
      <Typography
        variant="body1"
        component="span"
        sx={{
          fontSize: "28px",
          fontWeight: "700",
          marginRight: 0.3,
          transition: "0.2s",
          color:
            language === "EN"
              ? theme.palette.primary.main
              : theme.palette.background.paper, // Underline active language
        }}
      >
        EN
      </Typography>
      /
      <Typography
        variant="body1"
        component="span"
        sx={{
          fontSize: "28px",
          fontWeight: "700",
          transition: "0.2s",
          marginLeft: 0,
          color:
            language === "RU"
              ? theme.palette.primary.main
              : theme.palette.background.paper, // Underline active language
        }}
      >
        RU
      </Typography>
    </Button>
  );
};

export default LanguageSwitcher;
