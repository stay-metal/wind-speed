import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import theme from "@/theme/theme";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<"EN" | "RU">(
    (i18n.language?.toUpperCase() as "EN" | "RU") || "EN"
  );

  useEffect(() => {
    const currentLanguage = i18n.language ? i18n.language.toUpperCase() : "EN";
    setLanguage(currentLanguage as "EN" | "RU");
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "ru" : "en";
    i18n.changeLanguage(newLanguage).catch(console.error);
    setLanguage(newLanguage.toUpperCase() as "EN" | "RU");
  };

  return (
    <Button
      onClick={toggleLanguage}
      disableRipple
      disableFocusRipple
      sx={{
        // fontSize: { xs: "24px", sm: "24px", md: "25px", lg: "28px" },
        backgroundColor: "transparent",
        borderRadius: 2,
        height: "46px",
        paddingRight: "20px",
        minWidth: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "700",
        fontFamily: '"Inter", Arial, sans-serif',
        fontStyle: "italic",
        overflow: "visible",
        width: "100%",
      }}
    >
      <Typography
        variant="body1"
        component="span"
        sx={{
          fontSize: { xs: "24px", sm: "28px", md: "28px", lg: "28px" },
          fontWeight: "700",
          marginRight: 0.3,
          transition: "0.2s",
          color:
            language === "EN"
              ? theme.palette.primary.main
              : theme.palette.background.paper,
        }}
      >
        EN
      </Typography>

      <Typography
        component="div"
        sx={{
          fontSize: { xs: "45px", sm: "28px", md: "28px", lg: "28px" },
          fontWeight: "700",
          marginX: 0.5,
          transition: "0.2s",
          color: theme.palette.background.paper,
        }}
      >
        /
      </Typography>

      <Typography
        component="div"
        sx={{
          fontSize: { xs: "45px", sm: "28px", md: "28px", lg: "28px" },
          fontWeight: "700",
          transition: "0.2s",
          color:
            language === "RU"
              ? theme.palette.primary.main
              : theme.palette.background.paper,
        }}
      >
        RU
      </Typography>
    </Button>
  );
};

export default LanguageSwitcher;
