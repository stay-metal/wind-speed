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
        // paddingRight: "20px",
        paddingRight: { xs: "10px", sm: "20px", md: "20px", lg: "10px" },
        minWidth: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "700",
        fontFamily: '"Inter", Arial, sans-serif',
        fontStyle: "italic",
        width: "100%",
        marginTop: { xs: 0.4, sm: 0.2, md: 0, lg: 0 },
        marginRight: { xs: 2.5, sm: 2, md: 0, lg: 0 },
      }}
    >
      <Typography
        variant="body1"
        component="span"
        sx={{
          fontSize: { xs: "24px", sm: "28px", md: "30px", lg: "32px" },
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
        component="span"
        sx={{
          fontSize: { xs: "24px", sm: "28px", md: "30px", lg: "32px" },
          fontWeight: "700",
          marginX: 0.3,
          transition: "0.2s",
          color: theme.palette.background.paper,
        }}
      >
        /
      </Typography>

      <Typography
        component="span"
        sx={{
          fontSize: { xs: "24px", sm: "28px", md: "30px", lg: "32px" },
          fontWeight: "700",
          width: "39px",
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
