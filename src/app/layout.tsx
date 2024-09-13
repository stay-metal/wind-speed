"use client";
import { ReactNode, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "@/theme/theme";
import { Inter } from "@next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import I18nProvider from "@/providers/I18nProvider";
import { useTranslation } from "react-i18next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap", // Use swap for better performance
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage); // Set the language in i18n
  }, [i18n]);
  useEffect(() => {
    if (i18n.language) {
      localStorage.setItem("language", i18n.language);
      setLanguage(i18n.language);
    }
  }, [i18n.language]);

  return (
    <html lang={language} className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wind Speed Moto Rentals</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: theme.custom.maxPageWidth,
              }}
            >
              <I18nProvider>
                <Header />
                <main>{children}</main>
                <Footer />
              </I18nProvider>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
