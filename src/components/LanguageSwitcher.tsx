"use client"; // Ensure this is a client component

import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import theme from "@/theme/theme";
import { useTranslation } from "react-i18next"; // Use from react-i18next

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Ensure language is either 'en' or 'ru', falling back to 'en' if undefined
  const currentLang = i18n.language || "en";

  // State to track the current language, defaulting to the current i18n language
  const [language, setLanguage] = useState<"EN" | "RU">(
    currentLang.toUpperCase() as "EN" | "RU"
  );

  // Synchronize the state with the current i18n language
  useEffect(() => {
    const currentLanguage = i18n.language ? i18n.language.toUpperCase() : "EN";
    setLanguage(currentLanguage as "EN" | "RU");
  }, [i18n.language]);

  // Toggle between languages
  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "ru" : "en"; // Toggle between 'en' and 'ru'
    i18n.changeLanguage(newLanguage).catch(console.error); // Ensure async handling
    setLanguage(newLanguage.toUpperCase() as "EN" | "RU"); // Update local state
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
        fontFamily: '"Inter", Arial, sans-serif',
        fontStyle: "italic",
        "&:hover": {
          // backgroundColor: "#ff9100",
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
